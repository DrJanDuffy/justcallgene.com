import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Canonical domain: https://www.justcallgene.com (www)
  const canonicalHost = 'www.justcallgene.com';
  
  // Check if request needs redirect
  const needsRedirect = 
    // HTTP to HTTPS redirect
    request.nextUrl.protocol === 'http:' ||
    // non-www to www redirect
    (hostname === 'justcallgene.com' && !hostname.startsWith('www.'));
  
  if (needsRedirect) {
    // Build canonical URL
    url.protocol = 'https:';
    url.hostname = canonicalHost;
    
    // Preserve pathname and search params
    const redirectUrl = url.toString();
    
    return NextResponse.redirect(redirectUrl, {
      status: 301, // Permanent redirect
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
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

