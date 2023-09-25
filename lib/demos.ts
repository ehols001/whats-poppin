import { spotify, applemusic, ytmusic } from '@/public/assets';

export const services = [
    {
        serviceId: 'spotify',
        title: "Spotify",
        logo: spotify,
        link: "https://open.spotify.com/"
    },
    {
        serviceId: 'apple-music',
        title: "Apple Music",
        logo: applemusic,
        link: "https://music.apple.com/"
    },
    {
        serviceId: 'yt-music',
        title: "YouTube Music",
        logo: ytmusic,
        link: "https://music.youtube.com/"
    },
];

export const genres = [
    {
        id: "pop",
        title: "Pop"
    },
    {
        id: "country",
        title: "Country"
    },
    {
        id: "hiphop",
        title: "Hip Hop"
    },
    {
        id: "metal",
        title: "Metal"
    },
    {
        id: "rock",
        title: "Rock"
    },
];