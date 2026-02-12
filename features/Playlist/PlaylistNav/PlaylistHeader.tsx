'use client';
import {getTrackLayout} from '@/helper/TrackLayoutHelper';
import {useNavActions} from '@/store/playlistNavStore';
import {cn} from '@/lib/utils';
import {layoutColumns} from '@/helper/PlaylistLayoutColumnHelper';

interface PlaylistHeaderProps {
	type?: string;
}

export default function PlaylistHeader({ type }: PlaylistHeaderProps) {
	const { viewMode } = useNavActions();
	const layout = getTrackLayout(type, viewMode);
	const columns = layoutColumns[layout];

	return (
		<div
			className={cn(
				'track group h-9',
				`track--${layout}`,
				'px-4 gap-4 text-spotify-lightGray text-sm font-semibold border-b border-white/10 mb-6',
			)}
		>
			{columns.map((item, index) => (
				<span key={index} className='font-medium'>
					{item}
				</span>
			))}
		</div>
	);
};
