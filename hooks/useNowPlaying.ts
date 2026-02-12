'use client'


import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

export function useNowPlaying() {
  const { data: session, status } = useSession()

  const queryKey = ['nowPlaying', session?.user?.accessToken]

  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await fetch('/api/player');
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      return response.json()
    },
    enabled: status === 'authenticated',
    refetchInterval: (query) => {
      const data = query.state.data

      if (!data || !data.item || !data.is_playing) {
        return  5000
      }
      const timeLeft = data.item.duration_ms - data.progress_ms
      return timeLeft + 1500;
    },
    staleTime: 0,
    gcTime: 30 * 60 * 1000
  })
}
