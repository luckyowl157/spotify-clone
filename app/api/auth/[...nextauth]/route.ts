import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions = {
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID!,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
			authorization:
				'https://accounts.spotify.com/authorize?scope=user-read-email,user-read-private,playlist-read-private,playlist-read-collaborative,user-read-playback-state,user-modify-playback-state,user-read-currently-playing,streaming,user-follow-read,user-library-read,user-library-modify,user-read-recently-played',
		}),
	],
	callbacks: {
		async jwt({ token, account }: unknown) {
			if (account) {
				token.accessToken = account.access_token;
				token.refreshToken = account.refresh_token;
				token.expiresAt = account.expires_at;
			}
			return token;
		},
		async session({ session, token }: unknown) {
			session.user.accessToken = token.accessToken;
			session.user.refreshToken = token.refreshToken;
			return session;
		},
	},
};

const authHandler = NextAuth(authOptions);
export const GET = authHandler;
export const POST = authHandler;