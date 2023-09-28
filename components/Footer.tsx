import React from 'react'

export const Footer = () => {
    return (
        <div className='flex items-center my-8'>
            <div className='flex flex-col text-center text-sm'>
                <p>Designed and developed by <span className='font-bold'>Evan Holster</span></p>
                <p>using Next.js, React, Node.js, TypeScript, Prisma, Tailwind</p>
            </div>
        </div>
    )
}