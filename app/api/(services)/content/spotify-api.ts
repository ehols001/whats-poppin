import 'server-only';

/* function generateRandomString({ length }: { length: number }) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
} */

export async function getAccessToken() {
    const access_token = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_ID}&client_secret=${process.env.SPOTIFY_SECRET}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    return await access_token.json();
}

export async function getTopArtistsByGenre({
    genre,
    limit,
}: {
    genre: string;
    limit: string;
}) {

    const token = await getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/search?q=genre%3D${genre}&type=artist&limit=${limit}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token.access_token}`,
        },
    });
    
    return await response.json();
}