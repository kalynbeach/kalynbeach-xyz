'use client'

import { handleEnterFormInput } from './actions'

export default function EnterForm() {

  return (
    <div className='w-80 h-32 p-4 flex flex-col justify-center items-center bg-night-800 rounded'>
      {/* <h1 className='font-mono text-sm'>enter</h1> */}
      <form action={handleEnterFormInput}>
        <input
          name='password'
          placeholder='password'
          className='p-1 bg-night-900 border border-neutral-800 rounded focus-visible:outline-none focus-visible:ring focus-visible:outline-kb-green-light'
        />
      </form>
    </div>
  )
}