import {cn} from '@/lib/utils'

interface PlaylistProps {
	children: React.ReactNode
	className?: string
}

export default function PlaylistWrapper({ children, className }: PlaylistProps) {
	return <div className={cn('px-6', className)}>{children}</div>;
};
