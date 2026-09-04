import { CLIENT_ENDPOINT } from './config';

export async function gqlClient(query, variables = {}, { language = 'en', currency = 'USD' } = {}) {
  const res = await fetch(CLIENT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Language': language,
      'X-Currency': currency,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GraphQL error: ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors.map((e) => e.message).join(', '));
  return json.data;
}
