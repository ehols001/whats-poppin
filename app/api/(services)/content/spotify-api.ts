import 'server-only';

function generateRandomString({ length }: { length: number }) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export async function getAccessToken() {
    const access_token = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_ID}&client_secret=${process.env.SPOTIFY_SECRET}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then((response) => {
            return response.json();
        })
        /* .then((data) => {
            console.log('token', data);
        }) */
        .catch((error) => {
            console.error('Something went wrong!', error);
        });

    return access_token;
}

export async function getTopArtistsByGenre({
    genre,
    limit,
}: {
    genre: string;
    limit: string;
}) {

    const token = await getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/search?q=genre%3${genre}&type=artist&limit=${limit}`, {
        method: 'GET',
        headers: {
            'Authorization': `${token.token_type} ${token.access_token}`,
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('artist data', data);
        })
        .catch((error) => {
            console.error('Something went wrong!', error);
        });

    return response;
}