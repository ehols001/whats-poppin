'use client'

import Link from 'next/link';
import Image from 'next/image';

import type { Service } from '@/lib/types';

export function ServiceLogo({ service }: { service: Service }) {

    return (
        <div>
            <Link href={service.link}>
                <Image
                    src={`/${service.logo}`}
                    width={160}
                    height={160}
                    alt={service.title}
                />
            </Link>
        </div>
    )
}