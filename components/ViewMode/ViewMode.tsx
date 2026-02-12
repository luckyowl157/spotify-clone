import {cn} from '@/lib/utils'

interface ViewModeProp {
	children: React.ReactNode
	className?: string
}

export default function ViewMode({children, className}: ViewModeProp) {
	return (
		<div className={cn('flex flex-col gap-4', className)}>
			{children}
		</div>
	)
};
