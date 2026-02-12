'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

interface Playlist {
	id: string;
	name: string;
	images?: Array<{ url: string }>;
	external_urls: { spotify: string };
}

interface PlaylistsResponse {
	items: Playlist[];
	total: number;
}

export function usePlaylists() {
	const { data: session, status } = useSession();

	return useQuery<PlaylistsResponse>({
		queryKey: ['playlists', session?.user?.accessToken],
		queryFn: async () => {
			const response = await fetch('/api/playlist');
			if (!response.ok) {
				throw new Error('Failed to fetch playlists');
			}
			return response.json();
		},
		enabled: status === 'authenticated',
		staleTime: 5 * 60 * 1000, // 5 хвилин
		gcTime: 30 * 60 * 1000, // 30 хвилин (раніше cachTime)
		retry: 2,
	});
}
