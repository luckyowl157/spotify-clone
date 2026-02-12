
'use client';
import { useMemo, useState } from 'react';
// import { usePlaylists } from '@/hooks/usePlaylists';
import {useSidebarData} from '@/hooks/useCombineFetch';
import {Spinner} from '@/components/ui/spinner';
import { CardWrapper, CardCover, CardDetails} from '@/components/Cards';
import { SidebarActions } from './';
import { Switchers } from './Switchers';
import {CollapseBtn} from './Collapse'
import { cn } from '@/lib/utils';
import { useSidebarSwitcherStore } from '@/store/SidebarStore/sidebarSwitcher';
import { useSearchQueryStore } from '@/store/SidebarStore/searchQuery'
import { useCollapseSidebar } from '@/store/SidebarStore/collapseBtn'
import {CreatePlaylist} from './CreatePlaylist'
export function SidebarList() {
  const {isOpen} = useCollapseSidebar()
  const [currentTab, setCurrentTab] = useState<'all' | 'playlists' | 'artists' | 'albums'>('all');
  // const { data: sidebarData } = useSidebarData();
  const { data: sidebarData, isLoading, error } = useSidebarData();
	const { viewMode } = useSidebarSwitcherStore();
  const { searchQuery } = useSearchQueryStore();


type Playlist = {
  id: string;
  name: string;
  images?: Array<{ url: string }>;
  external_urls: { spotify: string };
  owner: { display_name: string };
};

// ---- PLAYLISTS ----
const playlists = useMemo<Playlist[]>(() => {
  if (!sidebarData?.playlists?.items) return [];
  if (!searchQuery) return sidebarData.playlists.items as Playlist[];
  return (sidebarData.playlists.items as Playlist[]).filter((playlist) =>
    playlist.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [sidebarData, searchQuery]);

// ---- ARTISTS ----
type Artist = {
  id: string;
  name: string;
  images?: Array<{ url: string }>;
  external_urls: { spotify: string };
};
const artists = useMemo<Artist[]>(() => {
  if (!sidebarData?.artists?.artists?.items) return [];
  if (!searchQuery) return sidebarData.artists.artists.items as Artist[];
  return (sidebarData.artists.artists.items as Artist[]).filter((artist) =>
    artist.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [sidebarData, searchQuery]);

// ---- ALBUMS ----
type Album = {
  id: string;
  name?: string;
  album?: {
    album_type?: string;
    name: string;
    images?: Array<{ url: string }>;
    artists?: Array<{ name: string }>;
  };
  images?: Array<{ url: string }>;
  artists?: Array<{ name: string }>;
};
const albums = useMemo<Album[]>(() => {
  if (!sidebarData?.albums?.items) return [];
  if (!searchQuery) return sidebarData.albums.items as Album[];
  return (sidebarData.albums.items as Album[]).filter((album) => {
    const albumName = album.album?.name || album.name;
    return albumName?.toLowerCase().includes(searchQuery.toLowerCase());
  });
}, [sidebarData, searchQuery]);


	if (isLoading) return (
			<Spinner className='text-white size-10'/>
	);
	if (error) {
		return (
			<div className='text-red-500 p-4'>
				<p>Error loading data</p>
				{sidebarData?.errors && sidebarData.errors.length > 0 && (
					<ul className='list-disc list-inside mt-2'>
						{sidebarData.errors.map((err, idx) => (
							<li key={idx}>{err}</li>
						))}
					</ul>
				)}
			</div>
		);
	}

	const viewStyle = cn(
		viewMode === 'compact' || viewMode === 'list' && 'flex flex-col gap-1',
		viewMode === 'compactGrid' && 'grid grid-cols-3 gap-1',
		viewMode === 'grid' && `grid gap-1 ${!isOpen ? 'grid-cols-3' : 'grid-cols-1'}`,
  );

  const isCollapsedView = cn(
    isOpen ? 'w-[72px]' : 'w-[420px]'
  )

	return (
		<div
			className={`h-screen overflow-auto grid-in-left-sidebar flex flex-col gap-2 bg-spotify-dark rounded-md pt-4 ${isCollapsedView}`}
		>
			<div
				className={cn('flex justify-between gap-4 px-4', isOpen && 'flex-col')}
			>
				<CollapseBtn />
				<CreatePlaylist />
			</div>
			{!isOpen && <Switchers current={currentTab} onSwitch={setCurrentTab} />}
			<div className='flex flex-col gap-2 px-2'>
				{!isOpen && <SidebarActions />}
				<div className={viewStyle}>
					{currentTab === 'all' && (
						<>
							{playlists.length === 0 &&
							artists.length === 0 &&
							albums.length === 0 &&
							searchQuery ? (
								<>
									<h1 className='text-white text-center w-full py-4'>
										Couldn&apos;t find &quot;{searchQuery}&quot;
									</h1>
									<p className='text-spotify-lightGray text-center'>
										Try searching again using a different spelling or keywords
									</p>
								</>
							) : (
								<>
									{/* Playlists */}
									{playlists.map(playlist => (
										<CardWrapper
											type={playlist.type}
											id={playlist.id}
											key={playlist.id}
										>
											<CardCover image={playlist.images?.[0] ?? { url: '' }} />
											<CardDetails
												name={playlist.name}
												owner={playlist.owner.display_name}
											/>
										</CardWrapper>
									))}
									{/* Artists */}
									{artists.map(artist => (
										<CardWrapper
											type={artist.type}
											id={artist.id}
											key={artist.id}
										>
											<CardCover
												type='artist'
												image={artist.images?.[0] ?? { url: '' }}
											/>
											<CardDetails name={artist.name} />
										</CardWrapper>
									))}
									{/* Albums */}
									{albums.map(album => {
										const albumType = album.album?.album_type || '';
										const albumName = album.album?.name || album.name || '';
										const albumImage =
											album.album?.images?.[0] || album.images?.[0];
										const albumArtist =
											album.album?.artists?.[0]?.name ||
											album.artists?.[0]?.name ||
											'';
										return (
											<CardWrapper
												type={album.album?.album_type}
												id={album.album?.id}
												key={album.name}
											>
												<CardCover image={albumImage ?? { url: '' }} />
												<CardDetails
													album_type={albumType}
													name={albumName}
													owner={albumArtist}
												/>
											</CardWrapper>
										);
									})}
								</>
							)}
						</>
					)}
					{currentTab === 'playlists' &&
						(playlists.length === 0 && searchQuery ? (
							<>
								<h1 className='text-white text-center w-full py-4'>
									Couldn&apos;t find &quot;{searchQuery}&quot;
								</h1>
								<p>
									Try searching again using a different spelling or keywords
								</p>
							</>
						) : (
							playlists.map(playlist => (
								<CardWrapper
									type={playlist.type}
									id={playlist.id}
									key={playlist.id}
								>
									<CardCover image={playlist.images?.[0] ?? { url: '' }} />
									<CardDetails
										name={playlist.name}
										owner={playlist.owner.display_name}
									/>
								</CardWrapper>
							))
						))}
					{currentTab === 'artists' &&
						(artists.length === 0 && searchQuery ? (
							<>
								<h1 className='text-white text-center w-full py-4'>
									Couldn&apos;t find &quot;{searchQuery}&quot;
								</h1>
								<p>
									Try searching again using a different spelling or keywords
								</p>
							</>
						) : (
							artists.map(artist => (
								<CardWrapper type={artist.type} id={artist.id} key={artist.id}>
									<CardCover
										type='artist'
										image={artist.images?.[0] ?? { url: '' }}
									/>
									<CardDetails name={artist.name} />
								</CardWrapper>
							))
						))}
					{currentTab === 'albums' &&
						(albums.length === 0 && searchQuery ? (
							<>
								<h1 className='text-white text-center w-full py-4'>
									Couldn&apos;t find &quot;{searchQuery}&quot;
								</h1>
								<p>
									Try searching again using a different spelling or keywords
								</p>
							</>
						) : (
							albums.map(album => {
								console.log('al.b', album)
								const albumType = album.album?.album_type || '';
								const albumName = album.album?.name || album.name || '';
								const albumImage =
									album.album?.images?.[0] || album.images?.[0];
								const albumArtist =
									album.album?.artists?.[0]?.name ||
									album.artists?.[0]?.name ||
									'';
								return (
									<CardWrapper
										key={album.id}
										type={album.album?.album_type}
										id={album.album?.id}
									>
										<CardCover image={albumImage ?? { url: '' }} />
										<CardDetails
											album_type={albumType}
											name={albumName}
											owner={albumArtist}
										/>
									</CardWrapper>
								);
							})
						))}
				</div>
			</div>
		</div>
	);
}

export default SidebarList;
