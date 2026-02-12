'use client'
import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useNavActions } from '@/store/playlistNavStore';
import { List, TextAlignJustify } from 'lucide-react';
import { cn } from '@/lib/utils';
import {ViewModeOptions} from './'

export default function PopoverView() {
	const {viewMode} = useNavActions()

	console.log('viewMode', viewMode);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='custom' className='text-spotify-lightGray capitalize cursor-pointer hover:text-white'>
					{viewMode === 'list' ? <List /> : <TextAlignJustify />}
					{viewMode}
				</Button>
			</PopoverTrigger>
			<PopoverContent align='end' className='w-40 p-0.5 rounded-[4px] bg-[#282828] border-0'>
				<ViewModeOptions />
			</PopoverContent>
		</Popover>
	);
}
