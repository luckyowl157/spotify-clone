'use client';

import { useCallback, useState } from 'react';
import ColorThief from 'colorthief';

export function useImagePalette(colorsCount = 6) {
	const [palette, setPalette] = useState<number[][]>([]);
	const [dominantColor, setDominantColor] = useState<number[] | null>(null);

	const extractFromImage = useCallback(
		(img: HTMLImageElement) => {
			if (!img || !img.complete) return;

			const thief = new ColorThief();

			const palette = thief.getPalette(img, colorsCount);
			const dominant = thief.getColor(img);

			setPalette(palette);
			setDominantColor(dominant);
		},
		[colorsCount],
	);

	return {
		palette,
		dominantColor,
		extractFromImage,
	};
}
