import { gqlServer } from '../client';

const GET_POPULAR_PLANS = `
  query GetPopularPlansAndPrices($language: String!) {
    popularPlansAndPrices(language: $language) {
      name
      thumbnail
      image
    }
  }
`;

export async function fetchPopularPlansAndPrices(language = 'en') {
  const data = await gqlServer(GET_POPULAR_PLANS, { language }, { revalidate: 86400 });
  return data?.popularPlansAndPrices ?? [];
}
