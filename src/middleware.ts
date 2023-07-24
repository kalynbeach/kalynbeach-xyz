import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { checkVerifiedCookie } from '@/lib/verification'


// export function middleware(request: NextRequest) {
//   let cookie = request.cookies.get('verified')
//   const isVerified = checkVerifiedCookie(request)
//   return NextResponse.next()
// }

// export const config = {
//   matcher: '/music/:path*'
// }