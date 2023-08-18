'use server'

import { verifyPassword } from '@/lib/verification'

export async function handleEnterFormInput(data: FormData) {
  const password = data.get('password') as string
  const isVerified: boolean = verifyPassword(password)
  return isVerified
}