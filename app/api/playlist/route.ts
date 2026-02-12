//get playlists

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
	const session = await getServerSession(authOptions);
	
	if (!session?.user?.accessToken) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	try {
		const response = await fetch('https://api.spotify.com/v1/me/playlists?limit=50', {
			headers: {
				'Authorization': `Bearer ${session.user.accessToken}`,
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`Spotify API error: ${response.status}`);
		}

		const playlists = await response.json();
		return NextResponse.json(playlists);
	} catch (error) {
		console.error('Playlist fetch error:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch playlists' },
			{ status: 500 }
		);
	}
}