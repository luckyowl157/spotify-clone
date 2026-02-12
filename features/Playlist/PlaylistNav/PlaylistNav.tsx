import { ViewMode, ViewModeOptions, PopoverView } from '@/components/ViewMode';
import Actions from './PlaylistActions'

export default function PlaylistNav() {
	return (
		<div className='py-6 flex items-center justify-between'>
			<Actions />
			<ViewMode className='max-w-[100px]'>
				<PopoverView />
			</ViewMode>
		</div>
	);
};
