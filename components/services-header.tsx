'use client'

import React, { useState } from 'react';

import { signIn, signOut } from 'next-auth/react';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ServiceLogo } from './service-logo';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Service } from '@/lib/types';
import { SettingsModal } from './settings-modal';

export default function ServicesHeader({
    user,
    services
}: {
    user: any;
    services: Service[];
}) {

    const [modalOpen, setModalOpen] = useState(false);

    const segment = useSelectedLayoutSegment();

    return (
        <div className='flex flex-col bg-gradient-to-b from-slate-200 to-slate-500/40 w-full p-8'>
            <div className='flex justify-between'>
                <ServiceLogo serviceId={`${segment}`} />

                <div className='flex items-center justify-between'>
                    {/* {user ? (
                        <button onClick={() => signOut()} className='flex items-center justify-center bg-black text-white h-9 mx-4 px-3 rounded-xl'>Sign Out</button>
                    ) : (
                        <button onClick={() => signIn()} className='flex items-center justify-center bg-black text-white h-9 mx-4 px-3 rounded-xl'>Sign In</button>
                    )} */}

                    <button onClick={() => setModalOpen(!modalOpen)}>
                        <div className='w-9 h-9 flex items-center justify-center bg-gradient-radial from-slate-300/40 via-slate-400/40 to-slate-500/40 transition-colors hover:bg-slate-100/50 rounded-xl'>
                            <FontAwesomeIcon icon={faGear} size='xl' />
                        </div>
                    </button>
                </div>

            </div>

            <div className={`${modalOpen ? 'fixed top-0 left-0 w-full h-screen bg-black/40' : ''}`} onClick={() => setModalOpen(false)}></div>
            
            <SettingsModal
                services={services}
                parent={'services-header'}
                isOpen={modalOpen}
                close={() => { setModalOpen(false) }}
            />


            {/* <h1>Top {numSongs} {genre} Songs</h1> */}

        </div>
    )
}