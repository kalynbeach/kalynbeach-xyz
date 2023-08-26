'use client'

import { StackProvider, WavePlayerStack } from '@kalynbeach/wave-player'
import { tracks } from './content'

export default function WavePlayerContainer() {
  return (
    <div className=''>
      <StackProvider>
        <WavePlayerStack
          id={0}
          tracks={tracks}
        />
      </StackProvider>
    </div>
  )
}