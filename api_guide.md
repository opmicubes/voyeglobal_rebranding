# Homepage API Integration Guide

This document lists all APIs and backend data calls used by the home page in this project, along with the current implementation pattern and the recommended way to reuse the same logic in a new Next.js app.

---

## 1. Overview

The home page does not use a large number of REST APIs. The app mainly uses a single GraphQL backend endpoint and a local Next.js proxy route for browser requests.

### Primary backend endpoint
- GraphQL base URL: `https://voyeglobal.com/graphql`
- Browser-facing proxy: `/api/graphql/`

Source files:
- [lib/gql/config.js](lib/gql/config.js)
- [app/api/graphql/route.js](app/api/graphql/route.js)
- [lib/gql/client.js](lib/gql/client.js)

### Why the proxy exists
The app avoids direct client-side GraphQL calls to the external domain and instead calls the same-origin Next.js API route. This helps with:
- CORS handling
- forwarding language and currency headers
- preserving cookies and auth context
- forwarding origin/referer for backend compatibility

---

## 2. Home page data flow

The homepage is rendered from [app/page.js](app/page.js).

It fetches data in parallel using `Promise.all()` and then passes the result into the UI section components.

### Homepage fetch flow
The main fetches happen in `DestinationsAsync()` and `EsimCheckAsync()` in [app/page.js](app/page.js).

#### Homepage data used
- Destination categories
- Popular plans and prices
- Cruise/global product plans
- Supported devices

---

## 3. API list used by the homepage

### 3.1 GraphQL endpoint configuration

#### File
- [lib/gql/config.js](lib/gql/config.js)

#### Values
```js
export const SERVER_ENDPOINT =
  process.env.VOYE_GRAPHQL_ENDPOINT || "https://voyeglobal.com/graphql";

export const CLIENT_ENDPOINT = "/api/graphql/";

export const SERVER_TIMEOUT_MS =
  Number(process.env.VOYE_GRAPHQL_TIMEOUT_MS) || 8000;

export const DEFAULT_REVALIDATE =
  Number(process.env.VOYE_GRAPHQL_REVALIDATE) || 86400;
```

#### Use pattern
- Server-side fetches use `gqlServer()`
- Client-side fetches use `gqlClient()`
- Browser requests go through `/api/graphql/`

---

### 3.2 GraphQL proxy route

#### File
- [app/api/graphql/route.js](app/api/graphql/route.js)

#### Purpose
This route receives client GraphQL requests and forwards them to the real backend with required headers.

It also forwards:
- Authorization header
- X-Language
- X-Currency
- Cookie
- X-Forwarded-For
- Origin
- Referer
- User-Agent

#### Important notes
This route is critical because the backend expects certain headers and cookies for session persistence and validation.

---

### 3.3 Destination categories API

#### GraphQL operation name
`FetchEsimCategories`

#### Function used
- `fetchEsimCategories()`
- `fetchEsimCategoriesWithEn()`

#### File
- [lib/gql/queries/esimCategories.js](lib/gql/queries/esimCategories.js)

#### Query structure
```graphql
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
```

#### Home page use
The homepage loads:
- countries: `place: "local"`
- regional: `place: "regional"`
- global: `place: "global"`

#### Data returned
Each category contains:
- `name`
- `image`
- `background_image`
- `lowest_price`
- `supported_countries`
- `supported_plans`

#### Usage pattern in Next.js
```js
const countries = await fetchEsimCategoriesWithEn({ place: "local" });
const regional = await fetchEsimCategoriesWithEn({ place: "regional" });
const global = await fetchEsimCategories({ place: "global" });
```

---

### 3.4 Product plans API

#### GraphQL operation name
`GetEsimProductsNew`

#### Function used
- `fetchEsimProductsNew()`

#### File
- [lib/gql/queries/esimProductsNew.js](lib/gql/queries/esimProductsNew.js)

#### Query structure
```graphql
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
      countries_name {
        country_name
        country_flag
      }
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
      countries_name {
        country_name
        country_flag
      }
      country_flag
      country_image
    }
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
      countries_name {
        country_name
        country_flag
      }
      country_flag
      country_image
    }
  }
}
```

#### Home page use
The homepage calls this API for:
- cruise plans: `category: "cruises", place: "local"`
- global plans: `category: "global", place: "global"`

#### Returned data
Each result category contains arrays like:
- `unlimited_plan`
- `normal_plan`
- `voice_plan`

Each plan includes fields such as:
- `id`
- `name`
- `data`
- `valid_for`
- `price`
- `coverage`
- `customerplanid`
- `country_flag`
- `country_image`

#### Usage pattern in Next.js
```js
const cruiseProducts = await fetchEsimProductsNew({
  category: "cruises",
  place: "local",
  language: "en",
});

const globalProducts = await fetchEsimProductsNew({
  category: "global",
  place: "global",
});
```

---

### 3.5 Popular plans and pricing API

#### GraphQL operation name
`GetPopularPlansAndPrices`

#### Function used
- `fetchPopularPlansAndPrices()`

#### File
- [lib/gql/queries/popularPlansAndPrices.js](lib/gql/queries/popularPlansAndPrices.js)

#### Query structure
```graphql
query GetPopularPlansAndPrices($language: String!) {
  popularPlansAndPrices(language: $language) {
    name
    thumbnail
    image
  }
}
```

#### Home page use
This is used to rank and sort popular destination countries by popularity.

#### Data returned
- `name`
- `thumbnail`
- `image`

#### Usage pattern in Next.js
```js
const popularPlans = await fetchPopularPlansAndPrices({ language: "en" });
```

---

### 3.6 Supported devices API

#### GraphQL operation name
`GetSupportedDevices`

#### Function used
- `fetchSupportedDevicesServer()`

#### File
- [lib/gql/queries/supportedDevices.js](lib/gql/queries/supportedDevices.js)

#### Query structure
```graphql
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
```

#### Home page use
This is used in the “supported devices” section on the home page.

#### Data returned
```js
[
  {
    brand: "Apple",
    models: ["iPhone 15", "iPhone 16"],
    text: "Compatible device description"
  }
]
```

#### Usage pattern in Next.js
```js
const devices = await fetchSupportedDevicesServer("en");
```

---

## 4. Core GraphQL client implementation

### File
- [lib/gql/client.js](lib/gql/client.js)

### Server-side wrapper
```js
export async function gqlServer(query, variables = {}, opts = {}) {
  // retries + GraphQL error handling
  // sends headers like language and currency
}
```

### Client-side wrapper
```js
export async function gqlClient(query, variables = {}, { language, currency } = {}) {
  const res = await fetch(CLIENT_ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  return json?.data;
}
```

### Important design decision
The app centralizes all GraphQL logic in one wrapper so each API call stays consistent across the application.

---

## 5. Recommended pattern for a new Next.js app

To recreate the same behavior in a new Next.js app, use this structure:

```txt
lib/
  gql/
    config.js
    client.js
    queries/
      esimCategories.js
      esimProductsNew.js
      popularPlansAndPrices.js
      supportedDevices.js
app/
  api/
    graphql/
      route.js
```

### Reusable pattern
1. Put all endpoint config in `lib/gql/config.js`
2. Add `gqlServer()` and `gqlClient()` in `lib/gql/client.js`
3. Add one helper file per GraphQL domain
4. Call them from server components in App Router
5. Use parallel fetches with `Promise.all()` when multiple datasets are needed

---

## 6. Example homepage fetch pattern for new app

```js
import { fetchEsimCategoriesWithEn } from "@/lib/gql/queries/esimCategories";
import { fetchEsimProductsNew } from "@/lib/gql/queries/esimProductsNew";
import { fetchPopularPlansAndPrices } from "@/lib/gql/queries/popularPlansAndPrices";
import { fetchSupportedDevicesServer } from "@/lib/gql/queries/supportedDevices";

export default async function HomePage() {
  const [
    countries,
    regional,
    globalCats,
    popularPlans,
    cruisePlans,
    globalPlans,
    devices,
  ] = await Promise.all([
    fetchEsimCategoriesWithEn({ place: "local" }),
    fetchEsimCategoriesWithEn({ place: "regional" }),
    fetchEsimCategories({ place: "global" }),
    fetchPopularPlansAndPrices({ language: "en" }),
    fetchEsimProductsNew({ category: "cruises", place: "local", language: "en" }),
    fetchEsimProductsNew({ category: "global", place: "global" }),
    fetchSupportedDevicesServer("en"),
  ]);

  return (
    <main>
      {/* render sections using the fetched data */}
    </main>
  );
}
```

---

## 7. Final summary

The homepage uses 4 main backend data calls:

1. `FetchEsimCategories`
2. `GetEsimProductsNew`
3. `GetPopularPlansAndPrices`
4. `GetSupportedDevices`

All of them are routed through the same GraphQL infrastructure and follow a consistent pattern that is safe to replicate in a new Next.js app.

---

## 8. Key implementation files

- [app/page.js](app/page.js)
- [lib/gql/client.js](lib/gql/client.js)
- [lib/gql/config.js](lib/gql/config.js)
- [app/api/graphql/route.js](app/api/graphql/route.js)
- [lib/gql/queries/esimCategories.js](lib/gql/queries/esimCategories.js)
- [lib/gql/queries/esimProductsNew.js](lib/gql/queries/esimProductsNew.js)
- [lib/gql/queries/popularPlansAndPrices.js](lib/gql/queries/popularPlansAndPrices.js)
- [lib/gql/queries/supportedDevices.js](lib/gql/queries/supportedDevices.js)

This is the exact integration pattern to reuse for the new version of the app.
