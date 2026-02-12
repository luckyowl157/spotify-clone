import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(
	_req: Request,
	context: { params: Promise<{ id: string }> },
) {
	const { id } = await context.params; // ⬅️ ОСЬ ТУТ ВАЖЛИВО

	const session = await getServerSession(authOptions);

	if (!session?.user?.accessToken) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	try {
		const response = await fetch(
			`https://api.spotify.com/v1/artists/${id}/related-artists`,
			{
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
			},
		);

		if (!response.ok) {
			const text = await response.text();
			console.error('Spotify error body:', text);
			throw new Error(`Spotify API error: ${response.status}`);
		}

		const related = await response.json();
		return NextResponse.json(related);
	} catch (error) {
		console.error('Related Artists fetch error:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch Related Artists' },
			{ status: 500 },
		);
	}
}
