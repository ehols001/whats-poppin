'use client'

import Link from 'next/link';
import React from 'react';

import { signIn, signOut } from 'next-auth/react';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ServiceLogo } from './service-logo';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function ServicesHeader({ user }: { user: any }) {

    const segment = useSelectedLayoutSegment();

    return (
        <div className='flex flex-col bg-slate-100 w-full p-8'>
            <div className='flex justify-between'>
                <ServiceLogo serviceId={`${segment}`} />

                <div className='flex items-center justify-between'>
                    {/* {user ? (
                        <button onClick={() => signOut()} className='flex items-center justify-center bg-black text-white h-9 mx-4 px-3 rounded-xl'>Sign Out</button>
                    ) : (
                        <button onClick={() => signIn()} className='flex items-center justify-center bg-black text-white h-9 mx-4 px-3 rounded-xl'>Sign In</button>
                    )} */}

                    <Link href='/services/service-settings' replace={true}>
                        <div className='w-9 h-9 flex items-center justify-center bg-slate-400 rounded-xl'>
                            <FontAwesomeIcon icon={faGear} size='xl' />
                        </div>
                    </Link>
                </div>

            </div>

            {/* <h1>Top {numSongs} {genre} Songs</h1> */}

        </div>
    )
}