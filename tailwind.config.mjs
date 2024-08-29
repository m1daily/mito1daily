/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/preline/preline.js',
	],
	darkMode: 'class',
	theme: {
		colors: {
			'white': '#fcfcfc',
			'blue': '#1fb6ff',
			'purple': '#7e5bef',
			'pink': '#ff49db',
			'orange': '#ff7849',
			'green': '#13ce66',
			'yellow': '#ffc82c',
			'gray-dark': '#151720',
			'gray': '#192030',
			'gray2': '#505e7a',
			'gray-light': '#f0f0f0',
			'black': '#000000',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.03em" }],
			sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.03em" }],
			base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.03em" }],
			lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.03em" }],
			xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.03em" }],
			"2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "0.03em" }],
			"3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "0.03em" }],
			"4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "0.03em" }],
			"5xl": ["3rem", { lineHeight: "1", letterSpacing: "0.03em" }],
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('preline/plugin'),
	],
}
