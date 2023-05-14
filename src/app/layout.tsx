import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Header from './Header'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <div className='w-full md:max-w-3xl lg:max-w-4xl min-h-screen mx-auto flex flex-col'>
          <Header />
          <main className='min-h-screen p-8 md:px-4 md:py-12 flex-1 flex flex-col'>
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
