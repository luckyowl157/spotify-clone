'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useCollapseSidebar} from '@/store/SidebarStore/collapseBtn'
import {cn} from '@/lib/utils'
import { Album } from './PageHeader.types';
import { getYear } from '@/lib/timeConverter';
import { useImagePalette } from '@/hooks/Header/useImagePalette';
import { getPaletteBackground } from '@/lib/getPaletteBackground';


export default function AlbumHeader({
	type,
	total_tracks,
	release_date,
	name,
	artists,
	images,
}: Album) {
	const { isOpen } = useCollapseSidebar();
	const { palette, extractFromImage } = useImagePalette(9);

	const background = getPaletteBackground(palette, {
		from: 2,
		to: 3,
		overlayOpacity: 0.85,
	});


	return (
		<div
			className='flex gap-6 items-end p-8 transition-colors duration-700 rounded-t-md'
			style={{ background }}
		>
			{/* Cover */}
			<div className='shrink-0'>
				{images?.[0] && (
					<Image
						src={images[0].url}
						width={232}
						height={232}
						alt={name}
						className='rounded-sm shadow-2xl'
						crossOrigin='anonymous'
						onLoadingComplete={extractFromImage}
					/>
				)}
			</div>

			{/* Info */}
			<div className='text-white space-y-4'>
				<small className='text-sm capitalize text-white/80'>{type}</small>

				<h1
					className={cn(
						'text-8xl mainTitle font-extrabold  leading-tight',
						!isOpen && 'text-5xl',
					)}
				>
					{name}
				</h1>

				<div className='flex items-center gap-2 text-sm'>
					<div className='flex items-center gap-2'>
						<Image
							src={images[0].url}
							width={24}
							height={24}
							alt=''
							className='rounded-full'
						/>
						<Link
							href={`/artist/${artists[0].id}`}
							className='font-bold hover:underline'
						>
							{artists[0].name}
						</Link>
					</div>

					<span className='text-white/70'>
						• {getYear(release_date)} • {total_tracks}{' '}
						{total_tracks > 1 ? 'songs' : 'song'}
					</span>
				</div>
			</div>
		</div>
	);
}
