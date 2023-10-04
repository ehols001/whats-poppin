import { Service } from '@/lib/types';
import { ServiceGroup } from './service-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

export function SettingsModal({
    services,
    parent,
    isOpen,
    close,
}: {
    services: Service[];
    parent: string;
    isOpen: boolean;
    close: any;
}) {
    return isOpen ? (
        <div className={`${parent === 'landing' ? '' : 'fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'}`}>
            <div className={`relative flex flex-col items-center justify-evenly bg-gradient-to-br from-slate-950 via-slate-900 to-slate-600 border-2 border-gray-400 rounded-xl shadow-xl ${parent === 'landing' ? 'md:mb-16 lg:mb-28}' : ''}`}>
                <button className={`${parent === 'landing' ? 'hidden' : ''}`} onClick={close}>
                    <FontAwesomeIcon icon={faXmark} size='lg' className='absolute top-5 right-5 text-white' />
                </button>
                <p className={`${parent === 'landing' ? 'hidden' : ''} mt-4 text-center text-white font-bold text-xl`}>SETTINGS</p>
                <p className='mt-4 text-center text-white font-bold text-lg'>
                    {parent === 'landing' ? 'Select a Service' : 'Change Service'}
                </p>
                <ServiceGroup services={services} close={close} />
            </div>
        </div>
    ) : null;
}