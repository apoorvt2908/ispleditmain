import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('query');
  const conversationId = searchParams.get('conversationId');
  const apiKey = process.env.NEXT_PUBLIC_CHAT_KEY;

  const bodyPayload = {
    query: query,
    conversation_id: conversationId,
  };

  const res = await fetch(
    'https://5scnca4i27exglvggcavdrohfe0ugouc.lambda-url.ap-south-1.on.aws/',
    {
      method: 'POST',
      headers: {
        accept: 'text/event-stream',
        'Content-Type': 'text/event-stream',
        // 'X-API-Key': apiKey ?? '',
      },
      cache: 'no-store',
      body: JSON.stringify(bodyPayload),
    }
  );

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch response' });
  }

  const encoder = new TextEncoder();

  const readableStream = new ReadableStream<Uint8Array>({
    async start(controller) {
      if (!res.body) {
        controller.error(new Error('Response body is empty'));
        controller.close();
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let partialChunk = '';

      async function read() {
        try {
          const { done, value } = await reader.read();

          if (done) {
            if (partialChunk.trim()) {
              try {
                const json = JSON.parse(partialChunk.trim());
                controller.enqueue(encoder.encode(JSON.stringify(json) + '\n\n'));
              } catch {
                // Ignore trailing garbage
              }
            }
            controller.close();
            return;
          }

          const chunkText = decoder.decode(value, { stream: true });
          partialChunk += chunkText;

          const lines = partialChunk.split('\n');

          for (let i = 0; i < lines.length - 1; i++) {
            const line = lines[i].trim();
            const cleanChunk = line.replace(/^data:\s*/, '').trim();

            if (!cleanChunk.startsWith('{')) continue;

            try {
              const json = JSON.parse(cleanChunk);
              controller.enqueue(encoder.encode(JSON.stringify(json) + '\n\n'));
            } catch (err) {
              console.warn('Skipping invalid JSON chunk:', line);
            }
          }

          partialChunk = lines[lines.length - 1];

          read();
        } catch (err) {
          console.error('Stream reading error:', err);
          controller.error(err);
          controller.close();
        }
      }

      read();
    },
  });

  return new Response(readableStream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
