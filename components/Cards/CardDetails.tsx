import {type UsersPlaylist, AlbumsProps}  from '@/types/Playlists'
import { useSidebarSwitcherStore } from '@/store/SidebarStore/sidebarSwitcher';
import { useCollapseSidebar } from '@/store/SidebarStore/collapseBtn'

type DetailsProps = {
	name?: UsersPlaylist['items'][0]['name'];
  owner?: UsersPlaylist['items'][0]['owner']['display_name'];
  album_type?: AlbumsProps['items'][0]['album']['album_type'];
}

export default function CardDetails({ name, owner, album_type }: DetailsProps) {
	const { viewMode, setViewMode } = useSidebarSwitcherStore();
  const {isOpen} = useCollapseSidebar()
  if (viewMode === 'compactGrid') return null;

	return (
		!isOpen && (
			<div className='flex flex-col items-start gap-0.5 text-white truncate'>
				{name && (
					<p className='text-base truncate w-full' title={name}>
						{name}
					</p>
				)}
				{viewMode !== 'compact' && owner && (
					<div
						className='flex gap-1 items-center text-spotify-lightGray text-sm truncate w-full'
						title={owner}
					>
						{album_type && (
							<>
								<span className='capitalize'>{album_type}</span> <span>•</span>
							</>
						)}
						{owner && <span>{owner}</span>}
					</div>
				)}
			</div>
		)
	);
};
