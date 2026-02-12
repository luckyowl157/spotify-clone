type TrackLayout =
	| 'playlist-list'
	| 'playlist-compact'
	| 'album-list'
	| 'album-compact';

export function getTrackLayout(type?: string, viewMode?: string): TrackLayout {
	const isCompact = viewMode === 'compact';
	const isAlbum = type === 'album';

	if (isAlbum && isCompact) return 'album-compact';
	if (isAlbum) return 'album-list';
	if (isCompact) return 'playlist-compact';
	return 'playlist-list';
}
