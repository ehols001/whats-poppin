import prisma from '@/lib/prisma';

export async function getServices() {
    const services = await prisma.service.findMany();
    //console.log(services);
    return services;
}

export async function getService({ serviceId }: { serviceId: string }) {
    const unique_service = await prisma.service.findUnique({
        where: {
            serviceId: serviceId,
        },
    });
    //console.log(unique_service);
    return unique_service;
}

async function createServiceRecords() {
    // Create many Service records
    /* const allServices = await prisma.service.createMany({
        data: [
            {
                serviceId: 'spotify',
                title: 'Spotify',
                link: 'https://open.spotify.com/',
            },
            {
                serviceId: 'apple-music',
                title: "Apple Music",
                link: "https://music.apple.com/",
            },
            {
                serviceId: 'yt-music',
                title: "YouTube Music",
                link: "https://music.youtube.com/",
            },
        ]
    }) */
}

/* main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }) */