import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { checkVerifiedCookie } from '@/lib/verification'


export function middleware(request: NextRequest) {
  console.log(`[middleware] middleware called.`)

  let cookie = request.cookies.get('verified')
  console.log(`[middleware] cookie: `, cookie)

  const isVerified = checkVerifiedCookie(request)
  console.log(`[middleware] isVerified: `, isVerified)

  // TOOD: Handle `isVerified` conditional response

  const response = NextResponse.next()

  return response
}

export const config = {
  matcher: '/music/:path*'
}