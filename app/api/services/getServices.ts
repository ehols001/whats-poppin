/* import type { Service } from './service';
import { PrismaClient } from '@prisma/client';
import 'server-only';

const prisma = new PrismaClient();

export async function getServices({ parent }: { parent?: string } = {}) {
    const res = await prisma.service.findMany();

    const allServices = res as Service[];
    //console.log(allServices);
    return allServices;
}

export async function getService({ serviceId }: { serviceId: string }) {
    const res = await prisma.service.findUnique({
        where: {
            serviceId: serviceId,
        }
    });

    const service = res as Service;
    //console.log(service)
    return service;
}
 */