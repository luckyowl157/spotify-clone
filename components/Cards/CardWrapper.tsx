import {type CardProps} from './Card.types';
import Link from 'next/link'
import {cn} from '@/lib/utils';
import { useSidebarSwitcherStore } from '@/store/SidebarStore/sidebarSwitcher';

interface CardWrapperProps {
	children?: React.ReactNode;
	className?: string;
	id?:  string
	type?: string
}

export default function CardWrapper({ className, children, id, type}: CardWrapperProps) {
	const { viewMode, setViewMode } = useSidebarSwitcherStore();
	const view = cn(
		viewMode === 'grid' ? 'flex-col' : 'flex-row',
	)
	return (
		<div
			// className={cn(
			// 	view,
			// 	'flex gap-3 p-2 rounded-md transition-colors hover:bg-spotify-gray cursor-pointer',
			// 	className,
			// )}
		>
			{type && id ? (
				<Link
					href={`/${type}/${id}`}
					className={cn(
						view,
						// 'flex gap-3 p-2 rounded-md transition-colors hover:bg-spotify-gray cursor-pointer items-center',
						'grid grid-cols-[48px_1fr] gap-3 p-2 rounded-md transition-colors hover:bg-spotify-gray cursor-pointer items-center',
						className,
					)}
				>
					{children}
				</Link>
			) : (
				children
			)}
		</div>
	);
};
