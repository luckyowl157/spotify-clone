export interface Album {
	type: string;
	release_date: string;
	name: string;
	images: Array<{
		url: string;
	}>;
	artists: Array<{
		id: string;
		name: string;
		type: string;
	}>;
	total_tracks: number;
}

export interface Playlist {
	description: string,
	followers: {
		total: number,
	},
	id: string,
	name: string,
	images: Array<{
		url: string,
	}>,
	owner: {
		display_name: string,
		id: string,
		type: string,
	},
	isPublic: boolean,
	snapshot_id?: string | null,
	type: string
}

export interface Artist {
	genres: Array<string>,
	followers: {
		total: number,
	},
	id: string,
	name: string,
	images: Array<{
		url: string,
	}>,
	type: string
}