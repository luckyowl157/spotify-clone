'use client'

import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'


export function useTrackFetch() {
  const {data: session, status} = useSession()

  return useQuery({
    queryKey: ['tracks', session?.user?.accessToken],
    queryFn: async () => {
      const response = await fetch('/api/tracks');
      if (!response.ok) {
        throw  new Error('Failed to fetch tracks')
      }
      return response.json()
    },
    enabled: status === 'authenticated',
    staleTime: 5 * 60 * 1000, // 5 хвилин
		gcTime: 30 * 60 * 1000, // 30 хвилин (раніше cachTime)
		retry: 2,
  })
}
