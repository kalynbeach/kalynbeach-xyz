import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const cookieName = 'verified'
const cookieValue = 'true'

export function checkVerifiedCookie(
  request?: NextRequest,
  name: string = cookieName
) {
  let cookie: RequestCookie | undefined

  if (!request) {
    cookie = cookies().get(name) 
  } else {
    cookie = request.cookies.get(name)
  }

  if (cookie) {
    return true
  }

  return false
}

export function setVerifiedCookie(
  response?: NextResponse,
  name: string = cookieName,
  value: string = cookieValue
) {
  if (response) {
    response.cookies.set({ name, value, httpOnly: true, path: '/' })
  } else {
    cookies().set({ name, value, httpOnly: true, path: '/' })
  }
}

export function verifyPassword(password: string) {
  if (password === process.env.MUSIC_PAGE_PASSWORD) {
    setVerifiedCookie()
    console.log(`[handleEnterFormInput] Verified!`)
    return true
  } else {
    console.log(`[handleEnterFormInput] Not verified.`)
    // TODO: Handle incorrect password
    return false
  }
}

export function verify(): boolean {
  const isVerified = checkVerifiedCookie()
  return isVerified
}