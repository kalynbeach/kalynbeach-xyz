import Card from '@/ui/Card'

const projects = [
  {
    title: 'kalynbeach-com',
    description: '🌐 This site',
    href: 'https://github.com/kalynbeach/kalynbeach-com'
  },
  {
    title: 'wave-visions',
    description: '🔊 Audio visualization experiments',
    href: 'https://github.com/kalynbeach/wave-visions'
  },
  {
    title: 'wave-dex',
    description: '🗂️ Music project and library indexer',
    href: 'https://github.com/kalynbeach/wave-dex'
  }
]

export default function Code() {
  return (
    <div>
      <h1 className='mb-8 text-3xl'>💻</h1>

      {/* Projects */}
      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-heading tracking-wide'>Projects</h2>
        <div className='grid lg:grid-cols-3 gap-4'>
          {projects.map((project, i) => <Card key={i} {...project} />)}
        </div>
      </section>
      
      {/* Work (Experience) */}
      {/* <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-heading tracking-wide'>Work</h2>
        <p className='text-xl'>🚧</p>
      </section> */}

      {/* Links */}
      {/* - Resume (PDF) */}
      {/* <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-heading tracking-wide'>Links</h2>
      </section> */}
    </div>
  )
}