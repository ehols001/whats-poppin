//import { getTopArtistsByGenre } from "@/app/api/(services)/content/spotifyCalls";
import { getAccessToken, getTopArtistsByGenre } from "@/app/api/(services)/content/spotify-api";

export async function generateMetadata({ params }: { params: { serviceId: string }}) {
    return {
        title: `What's Poppin! | ${params.serviceId.replace(params.serviceId[0], params.serviceId[0].toUpperCase())}`
    }
}

export default async function Service({ params }: { params: { serviceId: string }}) {

    //const token = await getAccessToken();
    const topArtists = await getTopArtistsByGenre({ genre: 'metalcore', limit: '1' });

    return (
        <div className="flex flex-col p-6">
            <p>{params.serviceId}</p>
        </div>
    );
}