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

const fetchCombinedData = async () => {
  let playlists = null;
  let artists = null;
  let albums = null;
  let errors: string[] = [];

  try {
    const playlistsResponse = await fetch('/api/playlist');
    if (!playlistsResponse.ok) {
      errors.push('Failed to fetch playlists');
    } else {
      playlists = await playlistsResponse.json();
    }
  } catch (error) {
    errors.push('Failed to fetch playlists');
  }

  try {
    const artistsResponse = await fetch('/api/artists');
    if (!artistsResponse.ok) {
      errors.push('Failed to fetch artists');
    } else {
      artists = await artistsResponse.json();
    }
  } catch (error) {
    errors.push('Failed to fetch artists');
  }

  try {
    const albumsResponse = await fetch('/api/albums');
    if (!albumsResponse.ok) {
      errors.push('Failed to fetch albums');
    } else {
      albums = await albumsResponse.json();
    }
  } catch (error) {
    errors.push('Failed to fetch albums');
  }

  return { playlists, artists, albums, errors };
}

export function useSidebarData() {
  const { data: session, status } = useSession();
  return useQuery({
    queryKey: ['sidebarData'],
    queryFn: fetchCombinedData,
    enabled: status === 'authenticated',
    staleTime: 5 * 60 * 1000, // 5 хвилин
    gcTime: 30 * 60 * 1000, // 30 хвилин (раніше cachTime)
    retry: 2,
  });
}



// export function usePlaylists() {
//   const { data: session, status } = useSession();
//   const playlistsResponse = await fetch('/api/playlist');
//   const playlists = await playlistsResponse.json();

//   const artistsResponse = await fetch('/api/artists');
//   const artists = await artistsResponse.json();

// 	return useQuery<PlaylistsResponse>({
// 		queryKey: ['playlists', session?.user?.accessToken],
// 		queryFn: async () => {
// 			const response = await fetch('/api/playlist');
// 			if (!response.ok) {
// 				throw new Error('Failed to fetch playlists');
// 			}
// 			return response.json();
// 		},
// 		enabled: status === 'authenticated',
// 		staleTime: 5 * 60 * 1000, // 5 хвилин
// 		gcTime: 30 * 60 * 1000, // 30 хвилин (раніше cachTime)
// 		retry: 2,
// 	});
// }
