import './globals.css'
import { inter, ibm_plex_mono, ibm_plex_sans } from './fonts'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/ui/Header'
import Footer from '@/ui/Footer'

export const metadata = {
  title: 'kalynbeach.com',
  description: 'Kalyn Beach',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} ${ibm_plex_mono.variable} ${ibm_plex_sans.variable} bg-night-900`}>
      <body>
        <div className='w-full md:max-w-3xl lg:max-w-4xl min-h-screen mx-auto flex flex-col'>
          <Header />
          <main className='min-h-max p-8 md:px-4 md:py-12 flex-1 flex flex-col'>
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
