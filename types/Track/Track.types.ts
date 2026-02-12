export interface TrackItemProps {
	artists?: Array<{
		id: string;
		name: string;
		type: string;
	}>;
	duration_ms: number;
	explicit: boolean;
	id: string;
	is_local?: boolean;
	name: string;
	track_number?: number;
	type?: string;
}
