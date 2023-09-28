import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What's Poppin!",
  description: 'Search for the most popular music, any genre, anywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
            <div className='fixed w-full h-screen bg-gradient-to-br from-slate-400 to-emerald-400 -z-10'></div>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}
