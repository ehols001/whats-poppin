import { spotify, applemusic, ytmusic } from '@/public/assets'

const platforms = [
    {
        title: "Spotify",
        logo: spotify,
        link: "https://open.spotify.com/"
    },
    {
        title: "Apple Music",
        logo: applemusic,
        link: "https://music.apple.com/"
    },
    {
        title: "YouTube Music",
        logo: ytmusic,
        link: "https://music.youtube.com/"
    },
]

const genres = [
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
]

export { platforms, genres }