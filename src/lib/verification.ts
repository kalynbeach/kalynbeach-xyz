import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export function authenticate(): Boolean {
  return false
}

const cookieName = 'verified'
const cookieValue = 'true'

export function checkVerifiedCookie(
  // request: NextRequest,
  name: string = cookieName
) {
  const cookie = cookies().get(cookieName)
  if (cookie) {
    return cookie.value === cookieValue
  }
  return false
}

export function setVerifiedCookie(
  // response: NextResponse,
  name: string = cookieName,
  value: string = cookieValue
) {
  cookies().set({
    name: cookieName,
    value: cookieValue,
    httpOnly: true,
    path: '/',
  })
}

export function verify(): boolean {
  const isVerified = checkVerifiedCookie()
  return isVerified
}