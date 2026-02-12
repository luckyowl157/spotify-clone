import {
	List,
	TextAlignJustify,
	Grid3x3,
	LayoutGrid,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import {cn} from '@/lib/utils';
import { useSidebarSwitcherStore } from '@/store/SidebarStore/sidebarSwitcher';

export default function SidebarActions() {
	const {viewMode, setViewMode} = useSidebarSwitcherStore();

	const handleViewModeChange = (mode: 'list' | 'grid' | 'compact') => {
		setViewMode(mode);
	}

	return (
		<ul className='flex gap-2 bg-spotify-dark rounded-xs'>
			<li>
				<Button
					onClick={() => handleViewModeChange('compact')}
					variant='custom'
					className={cn(
						'text-spotify-lightGray hover:text-white cursor-pointer p-2 h-8 rounded-xs',
						viewMode === 'compact' && 'text-white bg-spotify-lightGray/20 ',
					)}
				>
					<TextAlignJustify />
				</Button>
			</li>
			<li>
				<Button
					onClick={() => handleViewModeChange('list')}
					variant='custom'
					className={cn(
						'text-spotify-lightGray hover:text-white cursor-pointer rounded-xs p-2 h-8',
						viewMode === 'list' && 'text-white bg-spotify-lightGray/20',
					)}
				>
					<List />
				</Button>
			</li>
			<li>
				<Button
					onClick={() => handleViewModeChange('compactGrid')}
					variant='custom'
					className={cn(
						'text-spotify-lightGray hover:text-white cursor-pointer rounded-xs p-2 h-8',
						viewMode === 'compactGrid' && 'text-white bg-spotify-lightGray/20',
					)}
				>
					<Grid3x3 />
				</Button>
			</li>
			<li>
				<Button
					onClick={() => handleViewModeChange('grid')}
					variant='custom'
					className={cn(
						'text-spotify-lightGray hover:text-white cursor-pointer	rounded-xs p-2 h-8',
						viewMode === 'grid' && 'text-white bg-spotify-lightGray/20',
					)}
				>
					<LayoutGrid />
				</Button>
			</li>
		</ul>
	);
}