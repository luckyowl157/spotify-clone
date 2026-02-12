import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import {Playlist} from '@/components/Playlist'
import {Playlist} from '@/features/Playlist'
import {ContentWrapper} from '@/components/MainContent'
import {PlaylistHeader} from '@/components/PageHeader'
import {PlaylistWrapper} from '@/features/Playlist'
import { normalizePlaylistTracks } from '@/lib/spotify.normalizers';
import type { SpotifyPlaylist } from '@/types/spotify.api.types';


export const dynamic = 'force-dynamic';

async function getPlaylist(id: string, accessToken: string) {
	const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		cache: 'no-store',
	});

	if (!response.ok) {
		throw new Error('Failed to fetch playlist');
	}

	return response.json();
}

export default async function PlaylistPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const session = await getServerSession(authOptions);

	if (!session?.user?.accessToken) {
		return <h1>Unauthorized</h1>;
	}

	const playlist: SpotifyPlaylist = await getPlaylist(id, session.user.accessToken);
	const uiTracks = normalizePlaylistTracks(playlist.tracks.items);
	console.log('playlist', playlist)

	return (
		<ContentWrapper className=''>
			<PlaylistHeader
				images={playlist.images}
				name={playlist.name}
				description={playlist.description}
				followers={playlist.followers}
				id={playlist.id}
				owner={playlist.owner}
				isPublic={playlist.public}
				type={playlist.type}
			/>
			<PlaylistWrapper>
				<Playlist tracks={uiTracks} type={playlist.type} />
			</PlaylistWrapper>
		</ContentWrapper>
	);
}
