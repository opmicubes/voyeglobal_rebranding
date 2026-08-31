import { gqlServer } from '../client';

const GET_SUPPORTED_DEVICES = `
  mutation GetSupportedDevices($language: String!) {
    getSupportedDevices(input: { language: $language }) {
      devices {
        brand
        models
        text
      }
      error
    }
  }
`;

export async function fetchSupportedDevicesServer(language = 'en') {
  const data = await gqlServer(GET_SUPPORTED_DEVICES, { language }, { revalidate: 86400 });
  return data?.getSupportedDevices?.devices ?? [];
}
