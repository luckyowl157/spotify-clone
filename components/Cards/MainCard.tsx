import Image from 'next/image'
import Link from 'next/link'
import {getYear} from '@/lib/timeConverter'

interface CardProps {
	// item: {
	// 	id: string,
	// 	name: string,
	// 	album_type: string,
	// 	release_date: string
	// 	// images: string,
	// }
	id: string;
	name: string;
	album_type: string;
	release_date: string;
	images: string,
}

// export default function MainCard({ item }: { item: CardProps }) {
export default function MainCard({id, name, album_type, release_date, images}:  CardProps ) {
	return (
		<div className='flex flex-col gap-3 p-2 rounded-md transition-colors hover:bg-spotify-gray cursor-pointer items-center'>
			<Link href={'/album/' + id} className='text-white'>
				<Image
					src={images}
					alt={name}
					width={180}
					height={180}
					className='rounded-md'
				/>
				<div>
					<div>{name}</div>
					<div className='capitalize text-sm text-spotify-lightGray'>
						<time dateTime={getYear(release_date)}>
							{getYear(release_date)} •{' '}
						</time>
						{album_type}
					</div>
				</div>
			</Link>
		</div>
	);
};
