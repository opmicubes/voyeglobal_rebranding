import { gqlServer } from '../client';

const ESIM_CATEGORIES_QUERY = `
  query FetchEsimCategories(
    $place: String!
    $currency: String!
    $item_count: Int!
    $page_count: Int!
    $language: String!
  ) {
    esimCategories(
      place: $place
      currency: $currency
      item_count: $item_count
      page_count: $page_count
      language: $language
    ) {
      categories {
        name
        image
        background_image
        lowest_price
        supported_countries
        supported_plans
      }
      is_next_page
    }
  }
`;

export async function fetchEsimCategories({
  place,
  language = 'en',
  currency = 'USD',
  item_count = 20,
  page_count = 1,
} = {}) {
  const data = await gqlServer(ESIM_CATEGORIES_QUERY, {
    place,
    currency,
    item_count,
    page_count,
    language,
  });
  return data?.esimCategories ?? null;
}

export async function fetchEsimCategoriesWithEn(opts) {
  return fetchEsimCategories({ ...opts, language: 'en' });
}
