'use client'

import { handleEnterFormInput } from './actions'

export default function EnterForm() {

  return (
    <div className='w-72 h-24 p-4 flex flex-col justify-center items-center bg-night-900 border border-neutral-800 rounded'>
      <form action={handleEnterFormInput}>
        <input
          name='password'
          placeholder='password'
          className='p-1 bg-night-800 border border-neutral-800 rounded focus-visible:outline-none focus-visible:outline-kb-green-dark'
        />
      </form>
    </div>
  )
}