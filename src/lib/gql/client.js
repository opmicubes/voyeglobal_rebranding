import { SERVER_ENDPOINT, SERVER_TIMEOUT_MS, DEFAULT_REVALIDATE } from './config';

export async function gqlServer(query, variables = {}, opts = {}) {
  const { revalidate = DEFAULT_REVALIDATE, language = 'en', currency = 'USD' } = opts;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SERVER_TIMEOUT_MS);

  try {
    const res = await fetch(SERVER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Language': language,
        'X-Currency': currency,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate },
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`GraphQL error: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();

    if (json.errors?.length) {
      throw new Error(json.errors.map((e) => e.message).join(', '));
    }

    return json.data;
  } finally {
    clearTimeout(timeout);
  }
}
