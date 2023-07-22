'use server'

import { setVerifiedCookie } from '@/lib/verification'

export async function verifyPassword(data: FormData) {

  // Handle password from form input
  const password = data.get('password')

  if (password === process.env.MUSIC_PAGE_PASSWORD) {
    setVerifiedCookie()
    console.log(`[verifyPassword] Verified!`)
    return true
  } else {
    console.log(`[verifyPassword] Not verified.`)
    // TODO: Handle incorrect password
    return false
  }
}