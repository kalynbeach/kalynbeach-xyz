type PageHeadingProps = {
  emoji: string,
  name: string
}

export default function PageHeading({ emoji, name }: PageHeadingProps) {
  return (
    <div className='mb-24 flex flex-row justify-between items-center text-3xl font-mono'>
      <span className=''>
        {emoji}
      </span>
      <h1 className='tracking-wide'>
        {name}
      </h1>
    </div>
  )
}