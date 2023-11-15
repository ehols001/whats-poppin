import { Service } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

export const ServiceGroup = ({
    services,
    close,
}: {
    services: Service[];
    close: any;
}) => {

    return (
        <div className='flex flex-col p-4'>
            {services.map((service, key) => (
                <div className='m-2 border-2 border-gray-400 bg-gradient-radial from-slate-300 via-slate-400 to-slate-700 hover:from slate-300 hover:via-slate-300 hover:to-slate-600 rounded-xl' key={key}>
                    <Link href={`/services/${service?.serviceId}`} replace={true} onClick={close}>
                        <Image
                            src={`/${service?.logo}`}
                            width={250}
                            height={100}
                            alt={`${service?.title ? service.title : 'Image not found'}`}
                            className='p-2'
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}