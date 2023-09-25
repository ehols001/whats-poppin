import { StaticImageData } from "next/image";

export type Service = {
    serviceId: string;
    title: string;
    logo: StaticImageData;
    link: string;
    parent: string | null;
}