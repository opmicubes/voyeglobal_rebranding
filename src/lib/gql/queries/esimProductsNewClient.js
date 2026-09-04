import { gqlClient } from '../clientBrowser';

const ESIM_PRODUCTS_QUERY = `
  query GetEsimProductsNew(
    $category: String!
    $currency: String!
    $place: String!
    $language: String!
  ) {
    esimProductsNew1(
      category: $category
      currency: $currency
      place: $place
      language: $language
    ) {
      normal_plan {
        id
        name
        data
        valid_for
        price
        coverage
        customerplanid
        unlimited_data_msg
        country_service_note
        countries_name { country_name country_flag }
        country_flag
        country_image
      }
      unlimited_plan {
        id
        name
        data
        valid_for
        price
        coverage
        customerplanid
        unlimited_data_msg
        country_service_note
        countries_name { country_name country_flag }
        country_flag
        country_image
      }
      voice_plan {
        id
        name
        data
        valid_for
        price
        coverage
        customerplanid
        national_Calls
        international_calls
        app_national_call_msg
        app_international_call_msg
        country_service_note
        sms
        countries_name { country_name country_flag }
        country_flag
        country_image
      }
    }
  }
`;

export async function fetchEsimProductsNewClient({ category, place = 'local', language = 'en', currency = 'USD' }) {
  const data = await gqlClient(ESIM_PRODUCTS_QUERY, { category, currency, place, language });
  return data?.esimProductsNew1 ?? null;
}
