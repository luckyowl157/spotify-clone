import {TrackItem} from '@/features/TrackItem'
import PlaylistNav from './PlaylistNav/PlaylistNav'
import PlaylistHeader from './PlaylistNav/PlaylistHeader'
import type { UITrack } from '@/types/spotify.ui.types';

interface PlaylistProps {
	tracks: UITrack[]; // ✅ масив
	type?: string;
}
export default function Playlist({ tracks, type }: PlaylistProps) {
	if (!tracks?.length) return null;

	return (
		<>
			<PlaylistNav />
			<PlaylistHeader type={type} />
			{tracks.map((track, index) => (
				<TrackItem 
					key={track.id} 
					track={track}
					index={index}
					type={type}
				/>
			))}
		</>
	);
};
