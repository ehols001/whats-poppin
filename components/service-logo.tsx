import Link from 'next/link';
import Image from 'next/image';

export function ServiceLogo({ serviceId }: { serviceId: string }) {

    return (
        <div>
            <Link href={`https://${serviceId === 'spotify' ? 'open.' : 'music.'}${serviceId}.com`}>
                <Image
                    src={`/${serviceId}.png`}
                    width={160}
                    height={160}
                    alt={serviceId}
                />
            </Link>
        </div>
    )
}