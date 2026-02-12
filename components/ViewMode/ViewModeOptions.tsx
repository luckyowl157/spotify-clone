'use client'

import {Button} from '@/components/ui/button'
import {useNavActions} from '@/store/playlistNavStore'
import { List, TextAlignJustify, Check } from 'lucide-react';
import {cn}  from  '@/lib/utils'

export default function ViewModeOptions() {
	const viewMode = useNavActions((state) => state.viewMode);
	const setViewMode = useNavActions((state) => state.setViewMode);
	const iconSize = 'size-4';
	const textSize = 'inline-flex items-center gap-1';
	const buttonClasses = cn(
		'h-10 w-full px-3 rounded-[2px] flex flex-row text-white justify-between cursor-pointer hover:bg-white/10 hover:no-underline',
	);

	return (
		<ul className='max-w-40'>
			<li className='px-3 h-10 inline-flex items-center w-full'>
				<span className='text-xs text-white/70 font-bold'>View as</span>
			</li>
			<li>
				<Button
					variant='link'
					className={cn(
						buttonClasses,
						viewMode === 'list' && 'text-spotify-green',
					)}
					onClick={() => setViewMode('list')}
				>
					<span className={textSize}>
						<List />
						List
					</span>
					{viewMode === 'list' && (
						<Check className={cn(iconSize, viewMode && 'text-spotify-green')} />
					)}
				</Button>
			</li>
			<li>
				<Button
					variant='link'
					className={cn(
						buttonClasses,
						viewMode === 'compact' && 'text-spotify-green',
					)}
					onClick={() => setViewMode('compact')}
				>
					<span className={textSize}>
						<TextAlignJustify />
						Compact
					</span>
					{viewMode === 'compact' && (
						<Check className={cn(iconSize, viewMode && 'text-spotify-green')} />
					)}
				</Button>
			</li>
		</ul>
	);
};
