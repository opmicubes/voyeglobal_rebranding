import { NextResponse } from 'next/server';
import { getSiteSlugFromHost } from '@/lib/site/resolver';
import { SITE_HEADER } from '@/lib/site/constants';

// Resolves the site from the request host and forwards it to the app as a
// request header, so every Server Component can read it via getCurrentSite().
// (Next.js 16: `middleware` was renamed to `proxy`.)
export function proxy(request) {
  const slug = getSiteSlugFromHost(request.headers.get('host'));

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(SITE_HEADER, slug);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Run on all pages; skip static assets and Next internals.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'],
};
