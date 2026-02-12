import type { SpotifyArtist, SpotifyAlbum } from './spotify.api.types';

export interface UITrack {
	id: string;
	name: string;
	duration_ms: number;
	explicit: boolean;
	track_number: number;

	artists: SpotifyArtist[];

	album?: SpotifyAlbum;

	/**
	 * Present only for playlist tracks
	 */
	added_at?: string;
}
