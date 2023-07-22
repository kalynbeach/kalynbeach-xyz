import EnterModal from './EnterModal'
import UnderConstruction from '@/ui/UnderConstruction'

export const metadata = {
  title: 'enter - music | kalynbeach',
  description: 'Kalyn Beach Music',
}

export default function Enter() {
  return (
    <div className=''>
      <UnderConstruction />
      {/* Three.js canvas and animation behind EnterModal */}
      <EnterModal />
    </div>
  )
}