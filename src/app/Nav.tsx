import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='flex flex-row gap-10 justify-between items-center'>
      <Link href='/about' className='text-sm hover:text-kb-green-light md:text-base font-mono transition'>
        about
      </Link>
      <Link href='/blog' className='text-sm hover:text-kb-green-light md:text-base font-mono transition'>
        blog
      </Link>
    </nav>
  )
}