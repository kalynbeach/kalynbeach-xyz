import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='m-0 px-8 md:px-4 basis-32 flex flex-row justify-between items-center sticky top-0 bg-night-900 bg-transparent backdrop-blur z-50'>
      <Link href={'/'} className='font-mono md:text-lg text-white'>
        kalynbeach
      </Link>
      <Nav />
    </header>
  )
}