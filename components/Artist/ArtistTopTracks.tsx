'use client'
import {useState} from 'react'
import {useArtistTopTracks}  from '@/hooks/useArtistsTopTracks'
import {Button} from '@/components/ui/button'
import {TrackCard} from '@/components/TrackCard'
import {TrackItem} from  '@/features/TrackItem'

export default function ArtistTopTracks({ artistId }: { artistId: string }) {
	const [showMore, setShowMore] = useState(false)
	const { data, isLoading, error } = useArtistTopTracks(artistId);

	
	const handleToggleBtn = () => {
		setShowMore(prev => !prev)
	}	

	if (isLoading) {
		return <div className='text-2xl text-spotify-green'>Loading...</div>;
	}

	if (error || !data || !Array.isArray(data.tracks)) {
		console.error('Top tracks error:', error, data);
		return <div className='text-red-500'>Failed to load tracks</div>;
	}

	const displayedTracks = showMore ? data.tracks : data.tracks.slice(0, 5);

	console.info('top tracks', data);
	return (
		<div className='mt-6'>
			<h1 className='text-white text-2xl font-bold mb-4 mainTitle'>Popular</h1>
			{displayedTracks.map((track, index) => (
				<TrackItem key={track.id} track={track} index={index} />
			))}
			{data.tracks.length > 5 && (
				<Button 
					onClick={handleToggleBtn}
					variant='custom'
					className='text-spotify-lightGray cursor-pointer font-bold mt-4 hover:text-white'
				>
					{!showMore ? 'See more' : 'See less'}
				</Button>
			)}
		</div>
	);
};
