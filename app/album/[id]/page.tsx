import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { AlbumHeader } from '@/components/PageHeader';
import {ContentWrapper} from '@/components/MainContent'
import {PlaylistWrapper, Playlist} from '@/features/Playlist'
import { normalizeAlbumTracks } from '@/lib/spotify.normalizers';
import type { SpotifyAlbumResponse } from '@/types/spotify.api.types';



export const dynamic = 'force-dynamic';

async function getAlbum(id: string, accessToken: string) {
	const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
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

	const album: SpotifyAlbumResponse = await getAlbum(id, session.user.accessToken);
	const uiTracks = normalizeAlbumTracks(album.tracks.items, album);
 
	console.log('album', album)
	return (
		<ContentWrapper className=''>
			<AlbumHeader
				images={album.images}
				name={album.name}
				total_tracks={album.total_tracks}
				release_date={album.release_date}
				artists={album.artists}
				type={album.type}
			/>
			<PlaylistWrapper>
				<Playlist tracks={uiTracks} type={album.type} />
			</PlaylistWrapper>
		</ContentWrapper>
	);
}
