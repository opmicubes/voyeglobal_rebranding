import { SERVER_ENDPOINT, SERVER_TIMEOUT_MS, DEFAULT_REVALIDATE } from './config';
import { getCurrentSite } from '@/lib/site/context';

/**
 * Resolve the GraphQL endpoint for the current request's site.
 * Precedence: explicit opts.endpoint → resolved site's api endpoint →
 * global default. Falls back safely when called outside request scope
 * (e.g. build-time), where headers() is unavailable.
 */
async function resolveEndpoint(explicitEndpoint) {
  if (explicitEndpoint) return explicitEndpoint;
  try {
    const site = await getCurrentSite();
    return site?.config?.api?.graphqlEndpoint ?? SERVER_ENDPOINT;
  } catch {
    return SERVER_ENDPOINT;
  }
}

export async function gqlServer(query, variables = {}, opts = {}) {
  const { revalidate = DEFAULT_REVALIDATE, language = 'en', currency = 'USD', endpoint } = opts;

  const serverEndpoint = await resolveEndpoint(endpoint);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SERVER_TIMEOUT_MS);

  try {
    const res = await fetch(serverEndpoint, {
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
