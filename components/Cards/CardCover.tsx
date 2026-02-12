
import Image from 'next/image';
import {type UsersPlaylist}  from '@/types/Playlists'
import {type CardProps} from './Card.types';
import { useSidebarSwitcherStore } from '@/store/SidebarStore/sidebarSwitcher';
import { cn } from '@/lib/utils';
import { useCollapseSidebar } from '@/store/SidebarStore/collapseBtn'

type CoverProps = {
  image: UsersPlaylist['items'][0]['images'][0];
  style?: CardProps;
  type?: string;
  className?: string;
};

export default function CardCover({ image, style, type, className }: CoverProps) {
  const { viewMode } = useSidebarSwitcherStore();
  const {isOpen} = useCollapseSidebar()
	return (
		// <div>CardCover</div>

		<div>
			<Image
				src={image.url}
				width={viewMode === 'compact' ? 0 : viewMode === 'list' ? 48 : viewMode === 'compactGrid' ? 116 :  viewMode === 'grid' ? 110 : isOpen ? 48 : 48}
				height={viewMode === 'compact' ? 0 : viewMode === 'list' ? 48 : viewMode === 'compactGrid' ? 116 :  viewMode === 'grid' ? 110 : isOpen ? 48 : 48}
        className={cn(
          className,
          type === 'artist' ? 'rounded-full' : 'rounded-sm',
					viewMode === 'compact' && 'hidden',
					viewMode === 'list' && 'w-12 h-12',
					viewMode === 'compactGrid' && 'size-29',
          viewMode === 'grid' && 'w-29 h-29',
          isOpen && 'w-12 h-12',
				)}
				alt='Card Cover Image'
			/>
		</div>
	);
};
