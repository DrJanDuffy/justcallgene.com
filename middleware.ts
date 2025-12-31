import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Canonical domain: https://www.justcallgene.com (www)
  const canonicalHost = 'www.justcallgene.com';
  const canonicalProtocol = 'https:';
  
  // Determine if redirect is needed
  const isHttp = request.nextUrl.protocol === 'http:';
  const isNonWww = hostname === 'justcallgene.com';
  
  // Redirect needed if:
  // 1. HTTP (any hostname) → HTTPS www
  // 2. HTTPS non-www → HTTPS www
  const needsRedirect = isHttp || isNonWww;
  
  if (needsRedirect) {
    // Build canonical URL - always https://www.justcallgene.com
    url.protocol = canonicalProtocol;
    url.hostname = canonicalHost;
    
    // Preserve pathname and search params
    const redirectUrl = url.toString();
    
    return NextResponse.redirect(redirectUrl, {
      status: 301, // Permanent redirect (SEO-friendly)
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Redirect-Reason': isHttp 
          ? 'HTTP to HTTPS and www enforcement' 
          : 'Non-www to www enforcement',
      },
    });
  }
  
  return NextResponse.next();
}

// Match all routes except static files and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)).*)',
  ],
};

