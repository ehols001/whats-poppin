import ServicesHeader from './services-header';
import { getServerSession } from 'next-auth/next';
import { getService } from '@/prisma/db-scripts';

export default async function Nav() {
    const session = await getServerSession();

    let service = {
        id: 1,
        serviceId: 'spotify',
        title: 'Spotify',
        logo: 'spotify.png',
        link: 'https://open.spotify.com'
    };

    service = await getService({ serviceId: 'spotify' });

    return <ServicesHeader user={session?.user} service={service} />;
}