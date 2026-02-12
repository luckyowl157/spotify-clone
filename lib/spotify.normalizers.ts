import type {
	SpotifyPlaylistTrackItem,
	SpotifyTrack,
	SpotifyAlbum,
} from '@/types/spotify.api.types';

import type { UITrack } from '@/types/spotify.ui.types';

// ==============================
// Playlist → UI
// ==============================

export function normalizePlaylistTracks(
	items: SpotifyPlaylistTrackItem[],
): UITrack[] {
	return items
		.filter(
			(item): item is SpotifyPlaylistTrackItem & { track: SpotifyTrack } =>
				Boolean(item.track),
		)
		.map(item => ({
			...item.track,
			added_at: item.added_at,
		}));
}

// ==============================
// Album → UI
// ==============================

export function normalizeAlbumTracks(
	tracks: SpotifyTrack[],
	album: SpotifyAlbum,
): UITrack[] {
	return tracks.map(track => ({
		...track,
		album,
	}));
}
