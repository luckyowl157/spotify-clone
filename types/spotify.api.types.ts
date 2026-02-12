// ==============================
// Base Entities
// ==============================

export interface SpotifyImage {
	height: number | null;
	width: number | null;
	url: string;
}

export interface SpotifyArtist {
	id: string;
	name: string;
	type: 'artist';
	uri: string;
}

export interface SpotifyAlbum {
	id: string;
	name: string;
	album_type: 'album' | 'single' | 'compilation';
	total_tracks: number;
	release_date: string;
	release_date_precision: 'year' | 'month' | 'day';
	type: 'album';
	uri: string;

	images: SpotifyImage[];
	artists: SpotifyArtist[];
}

// ==============================
// Track
// ==============================

export interface SpotifyTrack {
	id: string;
	name: string;
	duration_ms: number;
	explicit: boolean;
	track_number: number;
	disc_number: number;
	type: 'track';
	uri: string;

	artists: SpotifyArtist[];

	/**
	 * ⚠️ Album field exists in playlist track object
	 * but NOT in album.tracks endpoint
	 */
	album?: SpotifyAlbum;
}

// ==============================
// Playlist Track Wrapper
// ==============================

export interface SpotifyPlaylistTrackItem {
	added_at: string;
	added_by: {
		id: string;
		type: string;
		uri: string;
	};
	track: SpotifyTrack | null; // ⚠️ Spotify can return null
}

// ==============================
// Pagination
// ==============================

export interface SpotifyPaginatedResponse<T> {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: T[];
}

// ==============================
// Playlist Response
// ==============================

export interface SpotifyPlaylist {
	id: string;
	name: string;
	description: string | null;
	public: boolean;
	type: 'playlist';
	uri: string;

	images: SpotifyImage[];
	followers: {
		total: number;
	};

	owner: {
		id: string;
		display_name: string;
		uri: string;
	};

	tracks: SpotifyPaginatedResponse<SpotifyPlaylistTrackItem>;
}

// ==============================
// Album Response
// ==============================

export interface SpotifyAlbumResponse extends SpotifyAlbum {
	tracks: SpotifyPaginatedResponse<SpotifyTrack>;
}
