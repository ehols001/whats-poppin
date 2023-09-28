'use client'

import Link from 'next/link';
import Image from 'next/image';

import type { Service } from '@/lib/types';

export function ServiceLogo({ service }: { service: Service }) {

    let default_service = {
        id: 1,
        serviceId: 'spotify',
        title: 'Spotify',
        logo: 'spotify.png',
        link: 'https://open.spotify.com'
    };

    let current_service = service !== null ? service : default_service;

    return (
        <div>
            <Link href={current_service.link}>
                <Image
                    src={`/${current_service.logo}`}
                    width={160}
                    height={160}
                    alt={current_service.title}
                />
            </Link>
        </div>
    )
}