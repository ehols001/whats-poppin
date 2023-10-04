import { getServices } from '@/prisma/db-scripts';
import ServicesHeader from './services-header';
import { getServerSession } from 'next-auth/next';

export default async function Nav() {
    const session = await getServerSession();
    const services = await getServices();

    return <ServicesHeader user={session?.user} services={services} />;
}