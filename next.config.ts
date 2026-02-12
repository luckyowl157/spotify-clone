import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.scdn.co',
				port: '',
				pathname: '/image/**',
			},
			{
				protocol: 'https',
				hostname: 'wrapped-images.spotifycdn.com',
				port: '',
				pathname: '/image/**',
			},
			{
				protocol: 'https',
				hostname: 'image-cdn-ak.spotifycdn.com',
				port: '',
				pathname: '/image/**',
			},
			{
				protocol: 'https',
				hostname: 'mosaic.scdn.co',
			},
			{
				protocol: 'https',
				hostname: 'seed-mix-image.spotifycdn.com',
			},
			{
				protocol: 'https',
				hostname: 'newjams-images.scdn.co',
			},
			{
				protocol: 'https',
				hostname: 'lineup-images.scdn.co',
			},
			{
				protocol: 'https',
				hostname: 'blend-playlist-covers.spotifycdn.com',
			},
			{
				protocol: 'https',
				hostname: 'image-cdn-fa.spotifycdn.com',
			},
		],
	},
};

export default nextConfig;
