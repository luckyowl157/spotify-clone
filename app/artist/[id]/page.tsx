import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useArtistTopTracks } from '@/hooks/useArtistsTopTracks';
import { ContentWrapper } from '@/components/MainContent';
import {ArtistHeader} from '@/components/PageHeader'
import {ArtistWrapper, TopTracks, Discography} from '@/components/Artist'

export const dynamic = 'force-dynamic';

async function getArtist(id: string, accessToken: string) {
	const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
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

	const artist = await getArtist(id, session.user.accessToken);
	

	console.log('artist', artist);

	return (
		<ContentWrapper className=''>
			<ArtistHeader
				name={artist.name}
				followers={artist.followers}
				id={artist.id}
				images={artist.images}
				type={artist.type}
			/>
			<ArtistWrapper>
				<TopTracks artistId={artist.id} />
				<Discography artistId={artist.id} />
			</ArtistWrapper>
		</ContentWrapper>
	);
}
