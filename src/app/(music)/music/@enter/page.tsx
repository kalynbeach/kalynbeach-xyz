import EnterForm from './EnterForm'
import { handleEnterFormInput } from './actions'


export const metadata = {
  title: 'enter - music | kalynbeach',
  description: 'Kalyn Beach Music',
}

export default function Enter() {
  return (
    <div className=''>
      {/* Three.js canvas and animation behind EnterForm */}
      <EnterForm
        serverAction={handleEnterFormInput}  
      />
    </div>
  )
}