export const  spotifyFetch = async (
	url: string,
	accessToken: string
) =>  {
	return fetch(`https://api.spotify.com/v1/${url}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`
		},
	}).then(res => res.json());
}