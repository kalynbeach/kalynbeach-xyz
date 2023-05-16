import { projects, jobs } from './content'
import PageHeading from '@/ui/PageHeading'
import Card from '@/ui/Card'
import Job from './Job'

export const metadata = {
  title: 'code | kalynbeach',
  description: 'Kalyn Beach Code',
}

export default function Code() {
  return (
    <div>
      <PageHeading emoji='💻' name='code' />

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
        <p className='my-4 text-xl text-center'>🚧 🚧 🚧</p>
        <div className='flex flex-col gap-4'>
          {
            jobs.map((job, i) => (
              <Job key={i} {...job} />
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