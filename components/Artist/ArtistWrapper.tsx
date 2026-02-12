import {cn} from '@/lib/utils'


interface SectionProps {
	children?: React.ReactNode,
	className?: string
}

export default function ArtistWrapper({children, className}: SectionProps) {
	return (
		<div className={cn(className, 'space-y-8 px-6')}>{children}</div>
	)
};
