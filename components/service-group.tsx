import { Service } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

export const ServiceGroup = ({ services }: { services: Service[] }) => {

    return (
        <div className='flex flex-col p-4'>
            {services.map((service) => (
                <div className='m-2 border-2 border-gray-400 rounded-xl'>
                    <Link href={`/services/${service?.serviceId}`}>
                        <Image
                            src={`/${service?.logo}`}
                            width={250}
                            height={100}
                            alt={`${service?.title ? service.title : 'Image not found'}`}
                            className='bg-gradient-radial from-slate-300 via-slate-400 to-slate-700 p-2 hover:from slate-300 hover:via-slate-300 hover:to-slate-600'
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}