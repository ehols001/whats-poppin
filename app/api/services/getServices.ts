import type { Service } from './service';
import { services } from '@/lib/demos';
import 'server-only';

export async function getServices({ parent }: { parent?: string } = {}) {
    const res = services;

    const allServices = res as Service[];

    return allServices;
}

export async function getService({ serviceId }: { serviceId: string }) {
    const res = services.find((service) => service.serviceId === serviceId);

    const service = res as Service;

    return service;
}
