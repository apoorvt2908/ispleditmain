// app/api/feedback/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const apiKey = process.env.NEXT_PUBLIC_CHAT_KEY;

  const body = await req.json();
  const { rating, comments, conversationId, messageId } = body;

  if (!rating || !conversationId || !messageId) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api4prod.elevatics.space/feedback/${conversationId}/${messageId}`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'X-API-Key': apiKey ?? '',
        },
        body: JSON.stringify({ rating, comments }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: 'Upstream API error', detail: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error('Error forwarding feedback:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
