
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {useSearchQueryStore}  from '@/store/SidebarStore/searchQuery'

export default function SearchField() {
	const { searchQuery, setSearchQuery, resetSearchQuery } =
		useSearchQueryStore();

	return (
		<div className='relative'>
			<Input
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
				placeholder='Search in Your Library'
				className='bg-spotify-gray border-0 text-white placeholder:text-spotify-lightGray focus-visible:ring-0 focus-visible:ring-offset-0'
			/>
			{searchQuery && <Button className='absolute top-0 right-0 text-white cursor-pointer'  variant='custom' onClick={resetSearchQuery}>X</Button>}
		</div>
	);
};
