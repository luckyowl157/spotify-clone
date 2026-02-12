'use client';

import { useQuery } from '@tanstack/react-query';

export function useArtistDiscography(artistId?: string) {
	return useQuery({
		queryKey: ['discography', artistId],
		queryFn: async () => {
			const res = await fetch(`/api/artists/${artistId}/albums`);
			console.log('Discography fetch status', res.status);
			if (!res.ok) throw new Error('Failed to fetch top Discography');
			return res.json();
		},
		enabled: !!artistId,
		staleTime: Infinity,
		gcTime: 60 * 60 * 1000,
	});
}
