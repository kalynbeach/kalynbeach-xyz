
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full h-36 mx-auto my-0 px-8 md:px-4 flex flex-col md:flex-row justify-evenly md:justify-between items-start md:items-center font-mono text-xs'>
      <span className=''>&copy; Kalyn Beach {currentYear}</span>
      <div className='flex flex-row justify-evenly items-center'>
        <a className='inline-block hover:text-kb-green-light transition' href='https://github.com/kalynbeach' target='_blank'>GitHub</a>
        <a className='inline-block hover:text-kb-green-light ml-12 transition' href='https://discordapp.com/channels/@me/kalynbeach#0114/' target='_blank'>Discord</a>
        <a className='inline-block hover:text-kb-green-light ml-12 transition' href='https://twitter.com/kalynbeach' target='_blank'>Twitter</a>
      </div>
    </footer>
  )
}