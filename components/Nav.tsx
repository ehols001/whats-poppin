import ServicesHeader from './services-header';
import { getServerSession } from 'next-auth/next';
import { getService } from '@/prisma/db-scripts';

export default async function Nav() {
    const session = await getServerSession();
    const service = await getService({ serviceId: 'spotify' });

    return <ServicesHeader user={session?.user} service={service} />;
}