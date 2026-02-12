export function getPaletteBackground(
	palette: number[][],
	options?: {
		from?: number;
		to?: number;
		overlayOpacity?: number;
	},
) {
	if (palette.length < 2) return 'transparent';

	const { from = 0, to = 1, overlayOpacity = 0.85 } = options || {};

	return `
    linear-gradient(
      rgba(0,0,0,0),
      rgba(0,0,0,${overlayOpacity})
    ),
    linear-gradient(
      180deg,
      rgb(${palette[from].join(',')}) 0%,
      rgb(${palette[to].join(',')}) 100%
    )
  `;
}
