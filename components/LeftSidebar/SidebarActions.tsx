'use client';
import {useState, Activity} from 'react';
import {
	Search,
	List,
	TextAlignJustify,
	Grid3x3,
	LayoutGrid,
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useSidebarSwitcherStore } from '@/store/SidebarStore/sidebarSwitcher';
import {SearchField} from  './Search'
import {ButtonView} from './ButtonView'


export default function SidebarActions() {
	const {viewMode} = useSidebarSwitcherStore();

	const iconList = {
		compact: TextAlignJustify,
		list: List,
		compactGrid: Grid3x3,
		grid: LayoutGrid,
	};
	const CurrentIcon = iconList[viewMode as keyof typeof iconList];
	const [isSearching, setIsSearching] = useState(false);

	return (
		<div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <Tooltip>
          <TooltipTrigger asChild >
            <Button
              className='size-8 rounded-full hover:bg-spotify-gray cursor-pointer group'
              onClick={() => setIsSearching(!isSearching)}
            >
              <Search className='text-spotify-lightGray group-hover:text-white' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className='text-sm'>Search in Your Library</p>
          </TooltipContent>
        </Tooltip>
        <Activity mode={isSearching ? 'visible' : 'hidden'}>
          <SearchField />
        </Activity>
      </div>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant='custom'
						className='text-spotify-lightGray hover:text-white cursor-pointer'
					>
						<p>Recent</p>
						<CurrentIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='bg-spotify-gray max-w-52 p-2 border-0 rounded-xs'>
					<ButtonView />
				</PopoverContent>
			</Popover>
		</div>
	);
}
