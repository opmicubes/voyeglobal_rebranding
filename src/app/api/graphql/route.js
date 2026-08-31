import { SERVER_ENDPOINT } from '@/lib/gql/config';

export async function POST(request) {
  const body = await request.json();
  const reqHeaders = request.headers;

  const forwardedHeaders = { 'Content-Type': 'application/json' };
  const toForward = [
    'authorization', 'x-language', 'x-currency',
    'cookie', 'x-forwarded-for', 'origin', 'referer', 'user-agent',
  ];
  for (const h of toForward) {
    const val = reqHeaders.get(h);
    if (val) forwardedHeaders[h] = val;
  }

  const res = await fetch(SERVER_ENDPOINT, {
    method: 'POST',
    headers: forwardedHeaders,
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  const data = await res.json();
  return Response.json(data, { status: res.status });
}
