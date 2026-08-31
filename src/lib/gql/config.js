export const SERVER_ENDPOINT =
  process.env.VOYE_GRAPHQL_ENDPOINT || 'https://voyeglobal.com/graphql';

export const CLIENT_ENDPOINT = '/api/graphql/';

export const SERVER_TIMEOUT_MS =
  Number(process.env.VOYE_GRAPHQL_TIMEOUT_MS) || 8000;

export const DEFAULT_REVALIDATE =
  Number(process.env.VOYE_GRAPHQL_REVALIDATE) || 86400;
