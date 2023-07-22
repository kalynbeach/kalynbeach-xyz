'use client'

import { verifyPassword } from './actions'

export default function EnterForm() {
  return (
    <div className='w-80 h-40 p-4 flex flex-col gap-6 justify-center items-center bg-night-800 rounded'>
      <h1 className='font-mono'>enter</h1>
      <form action={verifyPassword}>
        <input
          name='password'
          placeholder='password'
          className='p-1 bg-night-900 border border-neutral-800 rounded'
        />
      </form>
    </div>
  )
}