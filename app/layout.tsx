import './globals.css';
import { Raleway } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What's Poppin!",
  description: 'Search for the most popular music, any genre, anywhere',
}

const raleway = Raleway({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.className}>
        <body>
            <div className='fixed w-full h-screen bg-gradient-to-br from-slate-400 to-emerald-400 -z-10'></div>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}
