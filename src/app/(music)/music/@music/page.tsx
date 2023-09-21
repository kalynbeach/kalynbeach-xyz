import MusicScene from './MusicScene'
import WavePlayerContainer from './WavePlayerContainer'

export const metadata = {
  title: 'music | kalynbeach',
  description: 'Kalyn Beach Music',
}

export default function Music() {
  return (
    <div className='w-full h-screen relative flex justify-center items-center'>
      <div className='absolute -z-50 w-full h-full'>
        <MusicScene />
      </div>
      <div className='z-50'>
        <WavePlayerContainer />
      </div>
    </div>
  )
}