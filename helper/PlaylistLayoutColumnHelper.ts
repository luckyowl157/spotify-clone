type TrackLayout =
	| 'playlist-list'
	| 'playlist-compact'
	| 'album-list'
	| 'album-compact';

export const layoutColumns: Record<TrackLayout, string[]> = {
	'playlist-list': ['#', 'Title', 'Album', 'Date Added', 'Duration'],

	'playlist-compact': [
		'#',
		'Title',
		'Artist',
		'Album',
		'Date Added',
		'Duration',
	],

	'album-list': ['#', 'Title', 'Duration'],

	'album-compact': ['#', 'Title', 'Artist', 'Duration'],
};
