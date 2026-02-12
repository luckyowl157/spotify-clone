'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCollapseSidebar } from '@/store/SidebarStore/collapseBtn';
import { cn } from '@/lib/utils';
import { Artist } from './PageHeader.types';
import { getYear } from '@/lib/timeConverter';
import { useImagePalette } from '@/hooks/Header/useImagePalette';
import { getPaletteBackground } from '@/lib/getPaletteBackground';
import { CommaOnNumbers } from '@/lib/commaOnNumbers';
import VerifyIcon from '@/public/svg/VerifyIcon'

export default function ArtistHeader({ genres, followers, id, name, images, type }: Artist) {
	const { isOpen } = useCollapseSidebar();
	const { palette, extractFromImage } = useImagePalette(9);

	const background = getPaletteBackground(palette, {
		from: 1,
		to: 5,
		overlayOpacity: 0.85,
	});

	return (
		<div
			className='transition-colors px-6 pb-6 duration-700 rounded-t-md relative bg-cover w-full bg-no-repeat bg-fixed  h-[40vh]'
			style={{ backgroundImage: `url(${images[0].url})` }}
		>
			{/* {images?.[0] && (
				<Image
					src={images[0].url}
					width={isOpen ? 232 : 179}
					height={isOpen ? 232 : 179}
					alt={name}
					aria-hidden={true}
					className='rounded-sm shadow-2xl opacity-0 hidden'
					crossOrigin='anonymous'
					onLoadingComplete={extractFromImage}
				/>
			)} */}
			{/* <div
				className='absolute top-0 left-0 bg-top bg-cover h-[300px] w-full bg-no-repeat'
				style={{ backgroundImage: `url(${images[0].url})` }}
			/> */}
			<div className='flex flex-col justify-end h-full'>
				<div className='flex gap-2'>
					<VerifyIcon />
					<span className='font-normal text-white  text-sm'>
						Verified Artist
					</span>
				</div>
				<h1 className='mainTitle text-8xl text-white font-extrabold'>{name}</h1>
				<span className='text-white'>
					{CommaOnNumbers(followers.total)}
					{'  '}
					{followers.total > 1 ? 'followers' : ''}
				</span>
			</div>
		</div>
	);
}
