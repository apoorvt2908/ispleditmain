import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { type } = body;

  if (!type || !['website', 'bot'].includes(type)) {
    return NextResponse.json(
      { error: 'Invalid or missing type' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      'https://jy90x59ebf.execute-api.ap-south-1.amazonaws.com/visitor-counter',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
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
    console.error('Error forwarding tracking data:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
