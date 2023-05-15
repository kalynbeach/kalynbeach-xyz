import { projects, jobs } from './content'
import Card from '@/ui/Card'

export default function Code() {
  return (
    <div>
      <h1 className='mb-8 text-3xl'>💻</h1>

      {/* Projects */}
      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-heading tracking-wide'>Projects</h2>
        <div className='grid lg:grid-cols-3 gap-4'>
          {
            projects.map((project, i) => <Card key={i} {...project} />)
          }
        </div>
      </section>
      
      {/* Work (Experience) */}
      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-heading tracking-wide'>Work</h2>
        <div className='flex flex-col gap-4'>
          {
            jobs.map((job, i) => (
              <div key={i} className='p-4 flex flex-col justify-between gap-2 font-mono border border-neutral-900 rounded-lg'>
                {/* Job Heading */}
                <div className='flex flex-row justify-between items-center'>
                  <h3 className='text-xl'>{job.title}</h3>
                  <h4 className='text-xl font-bold tracking-wide'>{job.company}</h4>
                </div>
                {/* Job Info */}
                <div className=''>
                  <div className='flex flex-row justify-between items-center'>
                    <span className='text-sm'>{job.startDate} - {job.endDate}</span>
                    <span className='text-sm'>{job.location}</span>
                  </div>
                </div>
                {/* Job Description */}
                <p className='text-xs font-mono'>{job.description}</p>
              </div>
            ))
          }
        </div>
        <p className='my-4 text-xl text-center'>🚧 🚧 🚧</p>
      </section>

      {/* Links */}
      {/* - Resume (PDF) */}
      {/* <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-heading tracking-wide'>Links</h2>
      </section> */}
    </div>
  )
}