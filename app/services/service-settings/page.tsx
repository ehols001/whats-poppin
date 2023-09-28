import { SettingsModal } from "@/components/settings-modal";
import { getServices } from "@/prisma/db-scripts";

export default async function ServicesPage() {

    const services = await getServices();

    return (
        <div className=''>
            <div className='flex h-screen items-center justify-evenly'>
                <SettingsModal services={services} parent={'services-header'} />
            </div>
        </div>
    )
}