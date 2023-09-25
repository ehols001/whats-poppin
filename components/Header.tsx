'use client'

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { services, genres } from '@/lib/demos';
import { signIn, signOut } from 'next-auth/react';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header({ user }: { user: any }) {
    const [service, setService] = React.useState('');
    const index = Number(service);
    //const [genre, setGenre] = React.useState('Pop');
    //const [numSongs, setNumSongs] = React.useState('10');

    return (
        <div className='flex flex-col p-8 bg-slate-100'>
            <div className='flex justify-between'>
                <Link href={services[index].link}>
                    <Image
                        src={services[index].logo}
                        width={160}
                        height={160}
                        alt={services[index].title}
                    />
                </Link>
                <div className='flex items-center justify-between'>
                    {user ? (
                        <button onClick={() => signOut()} className='flex items-center justify-center bg-black text-white h-9 mx-4 px-3 rounded-xl'>Sign Out</button>
                    ) : (
                        <button onClick={() => signIn()} className='flex items-center justify-center bg-black text-white h-9 mx-4 px-3 rounded-xl'>Sign In</button>
                    )}

                    <Link href='/services/service-settings'>
                        <div className='w-9 h-9 flex items-center justify-center bg-slate-400 rounded-xl'>
                            <FontAwesomeIcon icon={faGear} size='xl' />
                        </div>
                    </Link>
                </div>
            </div>

            {/* <h1>Top {numSongs} {genre} Songs</h1> */}

            <div className='flex justify-between mt-8'>
                <div className='mr-4'>
                    {services.map((service, index) => (
                        <Link href={`/services/${service.serviceId}`}>{service.title}{' '}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}