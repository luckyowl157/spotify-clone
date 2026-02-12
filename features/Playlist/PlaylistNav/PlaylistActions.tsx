import {Button} from '@/components/ui/button'
import { Check, CirclePlus, Ellipsis } from 'lucide-react';
import Play from '@/public/svg/Play'

export default function PlaylistActions() {
	return (
		<div className='flex gap-6 items-center'>
			<Button
				variant='custom'
				className='cursor-pointer rounded-full size-14 bg-spotify-green/90 hover:scale-105 hover:bg-spotify-green'
			>
				<Play />
			</Button>
			<Button
				variant='custom'
				className='cursor-pointer size-8 rounded-full bg-spotify-green/90 hover:bg-spotify-green hover:scale-105'
			>
				<Check strokeWidth='4' className='' />
			</Button>
			<Button
				variant='custom'
				className='cursor-pointer size-8 hover:scale-105'
			>
				<Ellipsis className='text-spotify-lightGray hover:text-white size-7' strokeWidth='3' />
			</Button>
		</div>
	);
};
