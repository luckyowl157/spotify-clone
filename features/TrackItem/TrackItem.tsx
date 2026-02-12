'use client'
import {useNavActions} from '@/store/playlistNavStore';
import type { UITrack } from '@/types/spotify.ui.types';
import Link from 'next/link';
import Image from 'next/image';
import {getDayMonth, getYear, convertDuration} from '@/lib/timeConverter';
import {getTrackLayout} from '@/helper/TrackLayoutHelper';
import {cn} from '@/lib/utils';

interface TrackItemProps {
	track: UITrack;
	index: number;
	type?: string;
}


export default function TrackItem({ track, type, index }: TrackItemProps) {
	const { viewMode } = useNavActions();
	const layout = getTrackLayout(type, viewMode);

	return (
		<div
			className={cn(
				'track group text-spotify-lightGray hover:bg-white/10 px-4 gap-4 items-center rounded-[4px] cursor-pointer',
				`track--${layout}`,
				viewMode === 'compact' ? 'h-8' : 'h-14',
			)}
		>
			<div>
				<span>{index + 1}</span>
			</div>
			<div className='flex items-center gap-4'>
				{type !== 'album' && viewMode === 'list' && (
					<div className='shrink-0'>
						<Image
							width={40}
							height={40}
							src={track.album.images[0]?.url}
							alt={track.album.name}
							className='w-10 h-10 object-cover rounded-sm'
							priority
						/>
					</div>
				)}
				<div
					className={cn(
						'flex flex-col gap-0.5 truncate',
						viewMode === 'compact' && 'flex-row  gap-2',
					)}
				>
					{type === 'playlist' ? (
						<Link
							className='truncate text-base text-white hover:underline'
							href={`/track/${track.id}`}
						>
							{track.name}
						</Link>
					) : (
						<span className='truncate text-base text-white'>{track.name}</span>
					)}
					<div className='flex items-center gap-2'>
						{track.explicit && (
							<span className='font-bold text-[10.5px] bg-spotify-lightGray size-4 inline-flex rounded-[2px] items-center justify-center text-spotify-dark'>
								E
							</span>
						)}
						{viewMode === 'list' && track.artists && (
							<div className='truncate text-sm group-hover:text-white space-x-0.6'>
								{track.artists.map((artist, index) => (
									<Link
										key={artist.id}
										href={`/artist/${artist.id}`}
										className='hover:underline'
									>
										<span>
											{artist.name}
											{index < track.artists.length - 1 && ', '}
										</span>
									</Link>
								))}
							</div>
						)}
					</div>
				</div>
			</div>

			{viewMode === 'compact' && track.artists && track.artists && (
				<div className='truncate text-sm group-hover:text-white space-x-0.6'>
					{track.artists.map((artist, index) => (
						<Link
							key={artist.id}
							href={`/artist/${artist.id}`}
							className='hover:underline'
						>
							<span>
								{artist.name}
								{index < track.artists.length - 1 && ', '}
							</span>
						</Link>
					))}
				</div>
			)}

			{type === 'playlist' && track.album.name && (
				<div className='truncate text-sm'>
					<span>{track.album.name}</span>
				</div>
			)}
			{track?.added_at && (
				<div className='text-sm'>
					{getDayMonth(track?.added_at)}, {getYear(track?.added_at)}
				</div>
			)}
			{track.duration_ms && (
				<div className='text-sm'>{convertDuration(track.duration_ms)}</div>
			)}
		</div>
	);
};
