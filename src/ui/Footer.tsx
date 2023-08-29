
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full h-36 mx-auto my-0 px-8 md:px-4 flex flex-col md:flex-row justify-evenly md:justify-between items-start md:items-center font-mono text-xs'>
      <span className=''>&copy; Kalyn Beach {currentYear}</span>
      <div className='flex flex-row gap-12 justify-evenly items-center'>
        <a className='inline-block text-night-900 dark:text-white hover:text-kb-green-dark dark:hover:text-kb-green-light transition' href='https://twitter.com/kalynbeach' target='_blank'>X</a>
        <a className='inline-block text-night-900 dark:text-white hover:text-kb-green-dark dark:hover:text-kb-green-light transition' href='https://discordapp.com/channels/@me/kalynbeach/' target='_blank'>Discord</a>
        <a className='inline-block text-night-900 dark:text-white hover:text-kb-green-dark dark:hover:text-kb-green-light transition' href='https://github.com/kalynbeach' target='_blank'>GitHub</a>
      </div>
    </footer>
  )
}