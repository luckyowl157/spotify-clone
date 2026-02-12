'use client'

import { useQuery } from '@tanstack/react-query'

export function useArtist(artistId?: string, trackId?: string) {
  return useQuery({
    queryKey: ['artist', artistId, trackId],
    queryFn: async () => {
      const res = await fetch(`/api/artists/${artistId}`)
      console.log('artist fetch status:', res.status)
      if (!res.ok) throw new Error('Failed to fetch artist')
      return res.json()
    },
    enabled: !!artistId,
    staleTime: Infinity, // ⬅️ тепер ОК
    gcTime: 60 * 60 * 1000,
  })
}

