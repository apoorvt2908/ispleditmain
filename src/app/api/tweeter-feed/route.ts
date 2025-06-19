import { NextRequest, NextResponse } from 'next/server';

const BEARER_TOKEN =
  'AAAAAAAAAAAAAAAAAAAAADB40wEAAAAA2ZPK%2BB%2B4USd9KOyGbAF5EkUnRgQ%3DWtHIac0y56OIRyXvMVK8AngGWzfKfx5pCnO6gquXUyDUkv3Tuj';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || 'digiyatra';

  try {
    const twitterRes = await fetch(
      `https://api.twitter.com/2/tweets/search/recent?query=${query}&expansions=author_id&tweet.fields=created_at,text&user.fields=username,name,profile_image_url&max_results=10`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // check if Twitter response is OK
    if (!twitterRes.ok) {
      console.error('Twitter API error:', await twitterRes.json());
      return NextResponse.json(
        { error: 'Twitter API error' },
        { status: twitterRes.status }
      );
    }

    const twitterData = await twitterRes.json();
    return NextResponse.json(twitterData);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
