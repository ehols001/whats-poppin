import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    return (
        <div className='flex flex-col justify-center text-center text-sm my-8'>
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
    )
}