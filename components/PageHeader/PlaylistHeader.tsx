'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCollapseSidebar } from '@/store/SidebarStore/collapseBtn';
import { cn } from '@/lib/utils';
import { Playlist } from './PageHeader.types';
import { getYear } from '@/lib/timeConverter';
import { useImagePalette } from '@/hooks/Header/useImagePalette';
import { getPaletteBackground } from '@/lib/getPaletteBackground';
import { CommaOnNumbers } from '@/lib/commaOnNumbers';
export default function PlaylistHeader({
	name,
	description,
	images,
	id,
	type,
	owner,
	isPublic,
	followers,
}: Playlist) {
	const { isOpen } = useCollapseSidebar();
	const { palette, extractFromImage } = useImagePalette(9);

	const background = getPaletteBackground(palette, {
		from: 3,
		to: 1,
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
						width={isOpen ? 232 : 179}
						height={isOpen ? 232 : 179}
						alt={name}
						className='rounded-sm shadow-2xl'
						crossOrigin='anonymous'
						onLoadingComplete={extractFromImage}
					/>
				)}
			</div>

			<div className='text-white space-y-4'>
				<small className='text-sm capitalize text-white/80'>
					{isPublic && 'Public'} {type}
				</small>

				<h1
					className={cn(
						'text-7xl mainTitle font-extrabold  leading-tight',
						!isOpen && 'text-5xl',
					)}
				>
					{name}
					{description && (
						<p
							style={{ color: `rgb(${palette[3]})` }}
							className={cn(`font-normal text-sm`)}
						>
							{description}
						</p>
					)}
				</h1>

				<div className='flex items-center gap-2 text-sm'>
					<div className='flex items-center gap-2'>
						<Link
							href={`/${owner.type}/${owner.id}`}
							className='font-bold hover:underline'
						>
							{owner.display_name}
						</Link>
					</div>

					<span className='text-white/70'>
						{CommaOnNumbers(followers.total)}{' '}
						{followers > 1 ? 'followers' : 'follower'}
					</span>
				</div>
			</div>
		</div>
	);
}

