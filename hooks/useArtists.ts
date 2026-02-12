'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

interface Artists {
	id: string;
	type: string | unknown;
	uri: string;
	popularity: number;
	genres: Array<string>;
	href: string;
	name: string;
	images?: Array<{ url: string }>;
	external_urls: { spotify: string };
}

interface ArtistsResponse {
	artists: Artists[];
	total: number;
}

export function useArtists() {
	const { data: session, status } = useSession();

	return useQuery<ArtistsResponse>({
		queryKey: ['artists', session?.user?.accessToken],
		queryFn: async () => {
			const response = await fetch('/api/artists');
			if (!response.ok) {
				throw new Error('Failed to fetch artists');
			}
			return response.json();
		},
		enabled: status === 'authenticated',
		staleTime: 5 * 60 * 1000, // 5 хвилин
		gcTime: 30 * 60 * 1000, // 30 хвилин (раніше cachTime)
		retry: 2,
	});
}
