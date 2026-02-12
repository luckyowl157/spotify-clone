export type UsersPlaylist = {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: Array<{
		collaborative: boolean;
		description: string;
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		images: Array<{
			height: number | null;
			url: string;
			width: number | null;
		}>;
		name: string;
		owner: {
			display_name: string;
			external_urls: {
				spotify: string;
			};
			href: string;
			id: string;
			type: string;
			uri: string;
		};
		public: boolean | null;
		snapshot_id: string;
		tracks: {
			href: string;
			total: number;
		};
		type: string;
		uri: string;
	}>;
}

export type AlbumsProps = {
  items: Array<{
    album: {
      album_type: string,
    }
  }>
}
