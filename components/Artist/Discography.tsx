'use client'
import {useArtistDiscography} from '@/hooks/useArtistDiscography'
import {MainCard} from '@/components/Cards'

export default function Discography({artistId}:  {artistId: string}) {
	const {data, isLoading, error} = useArtistDiscography(artistId)

	const albumsData = data?.items?.slice(0, 5)
	return (
		<>
			<h1 className='text-white text-2xl font-bold  mainTitle'>Discography</h1>
			<div className='flex gap-4 overflow-x-auto py-4'>
				{albumsData?.map(album => (
					<MainCard
						key={album.id}
						name={album.name}
						id={album.id}
						images={album.images[0].url}
						release_date={album.release_date}
						album_type={album.album_type}
					/>
				))}
			</div>
		</>
	);
};
