import React from 'react';
import Image from 'next/image';
import logo from '@/public/whats-poppin.png';

export const MainLogo = () => {
    return (
        <Image
            src={logo}
            alt="What's Poppin!"
            width={500}
            height={250}
            className='my-8'
        />
    )
}