import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { checkVerifiedCookie } from '@/lib/verification'


export function middleware(request: NextRequest) {
  console.log(`[middleware] middleware called.`)

  let cookie = request.cookies.get('verified')
  console.log(`[middleware] cookie: `, cookie)

  const isVerified = checkVerifiedCookie()
  console.log(`[middleware] isVerified: `, isVerified)

  // if (isVerified) {
  //   console.log(`[middleware] Verified!`)
  //   return NextResponse.next()
  // }

  const response = NextResponse.next()

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/music/:path*'
  ],
}