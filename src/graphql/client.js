const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

/**
 * @template T
 * @param {string} query
 * @param {Record<string, unknown>} [variables]
 * @param {Record<string, string>} [headers]
 * @returns {Promise<T>}
 */
export async function fetchGraphQL(query, variables, headers) {
  if (!WORDPRESS_API_URL) {
    throw new Error('WORDPRESS_API_URL is not configured');
  }

  const response = await fetch(WORDPRESS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join(', '));
  }

  return json.data;
}
