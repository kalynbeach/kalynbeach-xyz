type Props = {
  title: string,
  description: string,
  href: string
}

export default function Card({ title, description, href }: Props) {
  return (
    <a
      href={href}
      className='min-h-fit p-5 font-mono group rounded-lg border border-neutral-900 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-800 hover:dark:bg-neutral-900/30'
      target='_blank'
    >
      <h2 className='mb-3'>
        {title}
      </h2>
      <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
        {description}
      </p>
    </a>
  )
}