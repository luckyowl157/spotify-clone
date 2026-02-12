export interface SpotifyImage {
	height?: number;
	width?: number;
	url: string;
}

export interface SpotifyArtist {
	id: string;
	name: string;
	type: 'artist';
}

export interface SpotifyAlbum {
	id: string;
	name: string;
	album_type: string;
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	type: 'album';
	images: SpotifyImage[];
	artists: SpotifyArtist[];
}

export interface SpotifyTrack {
	id: string;
	name: string;
	duration_ms: number;
	explicit: boolean;
	track_number: number;
	type: 'track';

	artists: SpotifyArtist[];

	// ⚠️ У album.tracks API альбом НЕ приходить повністю
	album?: SpotifyAlbum;
}


export interface WithMeta<T> {
	added_at?: string;
	added_by?: {
		id: string;
		type: string;
	};
	track: T;
}

export type PlaylistTrackItem = WithMeta<SpotifyTrack>;

export type AlbumTrackItem = SpotifyTrack;

export type UniversalTrackItem = PlaylistTrackItem | SpotifyTrack;
