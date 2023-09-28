import { Service } from '@/lib/types';
import { ServiceGroup } from './service-group';

export function SettingsModal({
    services,
    parent, 
}: { 
    services: Service[];
    parent: string; }
) {
    return (
        <div className='flex flex-col items-center justify-evenly bg-gradient-to-br from-slate-950 via-slate-900 to-slate-600 border-2 border-gray-400 rounded-xl shadow-xl  md:mb-16 lg:mb-28'>
            <p className={`${parent === 'landing' ? 'hidden' : ''} mt-4 text-center text-white font-bold text-xl`}>SETTINGS</p>
            <p className='mt-4 text-center text-white font-bold text-lg'>
                {parent === 'landing' ? 'Select a Service' : 'Change Service'}
            </p>
            <ServiceGroup services={services} />
        </div>
    )
}