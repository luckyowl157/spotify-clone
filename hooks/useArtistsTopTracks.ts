'use client'

import {useQuery} from '@tanstack/react-query'

export function useArtistTopTracks(artistId?: string) {
	return useQuery({
		queryKey: ['top-tracks', artistId],
		queryFn: async () =>  {
			const res = await fetch(`/api/artists/${artistId}/top-tracks`)
			console.log('Tracks fetch status', res.status)
			if(!res.ok) throw new Error('Failed to fetch top tracks')
			return res.json()
		},
		enabled: !!artistId,
		staleTime: Infinity,
		gcTime:  60 * 60 * 1000
	})
}