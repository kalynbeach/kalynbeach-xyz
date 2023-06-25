import ActiveLink from './ActiveLink'

export default function DesktopNav() {
  return (
    <nav className='flex flex-row gap-10 justify-between items-center'>
      <ActiveLink href='/about'>
        about
      </ActiveLink>
      <ActiveLink href='/blog'>
        blog
      </ActiveLink>
    </nav>
  )
}