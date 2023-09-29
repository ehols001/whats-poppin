import Nav from '@/components/nav';
import { Footer } from '@/components/footer';

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className='flex flex-col min-h-screen mx-12 md:mx-20'>
            <div className='flex flex-col items-center w-full'>
                <Nav />
            </div>
            <main>
                {children}
            </main>
            <div className='flex flex-col items-center w-full'>
                <div className='bg-sky-900/30 w-full rounded-md h-0.5'></div>
                <Footer />
            </div>
        </div>
    )
}
