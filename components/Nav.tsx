import ServicesHeader from './services-header';
import { getServerSession } from 'next-auth/next';

export default async function Nav() {
    const session = await getServerSession();
    return <ServicesHeader user={session?.user} />;
}