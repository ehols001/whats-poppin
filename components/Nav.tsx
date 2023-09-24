import Header from './Header';
import { getServerSession } from 'next-auth/next';

export default async function Nav() {
    const session = await getServerSession();
    return <Header user={session?.user} />;
}