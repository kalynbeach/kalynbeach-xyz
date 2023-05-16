type JobProps = {
  title: string,
  company: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string
}

export default function Job({
  title,
  company,
  startDate,
  endDate,
  location,
  description
}: JobProps) {
  return (
    <div className='p-4 flex flex-col justify-between gap-3 md:gap-2 border border-neutral-900 rounded-lg'>
      {/* Job Heading */}
      <div className='flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-0'>
        <h3 className='text-lg md:text-xl font-mono'>{title}</h3>
        <h4 className='text-lg md:text-xl font-sans font-bold tracking-wide'>{company}</h4>
      </div>
      {/* Job Info */}
      <div className='flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-0'>
        <span className='text-sm font-mono'>{startDate} - {endDate}</span>
        <span className='text-sm font-mono'>{location}</span>
      </div>
      {/* Job Description */}
      <p className='md:mt-3 text-sm font-mono'>{description}</p>
    </div>
  )
}