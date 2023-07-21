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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='flex flex-row gap-10 justify-between items-center'>
      <button onClick={toggleMenu}>
        {
          isOpen ? (
            <svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path className='fill-night-900 dark:fill-white' d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/>
            </svg>
          ) : (
            <svg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path className='fill-night-900 dark:fill-white' d='M2 6h20v2H2zm0 5h20v2H2zm0 5h20v2H2z'/>
            </svg>
          )
        }
      </button>
      <div className={`${isOpen ? 'h-64' : 'h-0'} absolute left-0 top-32 w-full bg-white dark:bg-night-900 transition-all ease-out duration-300 transform`}>
        <div 
          className={`${!isOpen ? 'hidden' : ''} h-full p-8 flex flex-col justify-evenly gap-8 text-xl text-right border-t border-b border-neutral-200 dark:border-neutral-900 z-50`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <ActiveLink href='/about' onClick={() => setIsOpen(!isOpen)}>
            about
          </ActiveLink>
          {/* <ActiveLink href='/blog' onClick={() => setIsOpen(!isOpen)}>
            blog
          </ActiveLink> */}
          {/* <ActiveLink href='/code'>
            code
          </ActiveLink> */}
          {/* <ActiveLink href='/music'>
            music
          </ActiveLink> */}
        </div>
      </div>
    </nav>
  )
}