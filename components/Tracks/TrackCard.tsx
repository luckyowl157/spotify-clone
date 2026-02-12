
import Image from 'next/image'
import Link from 'next/link'
import {convertDuration} from '@/lib/timeConverter'
import {TrackItemProps} from './Track.types'


export default function TrackCard({
	artists,
	track_number,
	name,
	id,
	duration_ms,
	image,
	explicit,
	is_local,
	type,
}: TrackItemProps) {
	return (
		<div className='track items-center text-white hover:bg-white/10 h-14 rounded-[4px] gap-4 px-4'>
			{track_number && <div>{track_number}</div>}
			<div className='flex gap-4 items-center'>
				{image && (
					<Image
						className='size-10 rounded-[4px]'
						src={image}
						width={40}
						height={40}
						alt={name}
					/>
				)}
				<div>
					<div>
						{name && (
							<Link href={'/track/' + id} className='hover:underline line-height'>
								<span>{name}</span>
							</Link>
						)}
						{artists &&
							artists.map((artist, index) => (
								<span key={artist.id}>
									<Link href={`/${artist.type}/${artist.id}`}>
										{artist.name}
									</Link>
									{index < item.track.artists.length - 1 && ', '}
								</span>
							))}
					</div>
					{explicit && (
						<span className='size-4 rounded-[2px] bg-spotify-lightGray text-spotify-dark inline-flex items-center justify-center text-[10px]'>
							E
						</span>
					)}
				</div>
			</div>
			{duration_ms && <span>{convertDuration(duration_ms)}</span>}
		</div>
	);
};
