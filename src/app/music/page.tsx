import PageHeading from '@/ui/PageHeading'
import UnderConstruction from '@/ui/UnderConstruction'

export const metadata = {
  title: 'music | kalynbeach',
  description: 'Kalyn Beach Music',
}

export default function Music() {
  return (
    <div>
      <PageHeading emoji='🎵' name='music' />
      <UnderConstruction />
    </div>
  )
}