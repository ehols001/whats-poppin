import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "What's Poppin",
  description: 'Search for the most popular music, any genre, anywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='mx-12 md:mx-20'>
            <Nav />
            <div className='bg-slate-400 rounded-md h-0.5'></div>
            <main>
                {children}
            </main>
            <div className='bg-slate-400 rounded-md h-0.5'></div>
            <Footer />
        </body>
    </html>
  )
}
