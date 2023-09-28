import { getServices } from '@/prisma/db-scripts';
import { SettingsModal } from '@/components/settings-modal';
import { MainLogo } from '@/components/main-logo';
import { Footer } from '@/components/footer';

export default async function LandingPage() {

    const services = await getServices();

    return (
        <div className='flex flex-col items-center min-h-screen'>
            <MainLogo />
            <SettingsModal services={services} parent={'landing'} />
            <Footer />
        </div>
    );
}