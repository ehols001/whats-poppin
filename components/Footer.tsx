import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    return (
        <div className='flex items-center my-8'>
            <div className='flex flex-col text-center text-sm'>
                <p>Designed and developed by 
                    <Link
                        href="https://www.linkedin.com/in/evan-holster-b1b909239/"
                        target='_blank'
                    >
                        <span className='font-bold'> Evan Holster</span>
                    </Link>
                </p>    
                <p>using Next.js, React, Node.js, TypeScript, Prisma, and Tailwind</p>
                <p className='mt-2'>Deployed on 
                    <Link 
                        href="https://www.vercel.com"
                        target='_blank'
                    >
                        <span className='font-bold'> Vercel</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}