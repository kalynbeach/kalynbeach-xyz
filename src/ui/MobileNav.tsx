'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ActiveLink from './ActiveLink'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()
  
  // Close mobile nav menu when user navigates home
  useEffect(() => {
    if (pathName === '/') {
      setIsOpen(false)
    }
  }, [pathName])

  return (
    <nav className='flex flex-row gap-10 justify-between items-center'>
      <button onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen ? (
            <svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path className='fill-white' d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/>
            </svg>
          ) : (
            <svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path className='fill-white' d='M2 6h20v2H2zm0 5h20v2H2zm0 5h20v2H2z'/>
            </svg>
          )
        }
      </button>
      {
        isOpen && (
          <div className='absolute left-0 top-32 w-full h-fit px-8 py-16 flex flex-col items-end gap-8 text-xl bg-night-900'>
            <ActiveLink href='/about' onClick={() => setIsOpen(!isOpen)}>
              about
            </ActiveLink>
            <ActiveLink href='/blog' onClick={() => setIsOpen(!isOpen)}>
              blog
            </ActiveLink>
          </div>
        )
      }
    </nav>
  )
}