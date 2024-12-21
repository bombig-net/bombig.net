const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: [
				'var(--font-geist-sans)'
			]
		},
		fontSize: {
			xs: [
				'var(--font-size-xs)',
				{
					lineHeight: 'var(--line-height-3)',
					letterSpacing: 'normal'
				}
			],
			sm: [
				'var(--font-size-sm)',
				{
					lineHeight: 'var(--line-height-4)',
					letterSpacing: 'var(--letter-spacing-tight)'
				}
			],
			base: [
				'var(--font-size-base)',
				{
					lineHeight: 'var(--line-height-5)',
					letterSpacing: 'var(--letter-spacing-tight)'
				}
			],
			lg: [
				'var(--font-size-lg)',
				{
					lineHeight: 'var(--line-height-6)',
					letterSpacing: 'var(--letter-spacing-tighter)'
				}
			],
			xl: [
				'var(--font-size-xl)',
				{
					lineHeight: 'var(--line-height-7)',
					letterSpacing: 'var(--letter-spacing-tighter)'
				}
			],
			'2xl': [
				'var(--font-size-2xl)',
				{
					lineHeight: 'var(--line-height-8)',
					letterSpacing: 'var(--letter-spacing-tighter)'
				}
			],
			'3xl': [
				'var(--font-size-3xl)',
				{
					lineHeight: 'var(--line-height-9)',
					letterSpacing: 'var(--letter-spacing-tighter)'
				}
			],
			'4xl': [
				'var(--font-size-4xl)',
				{
					lineHeight: 'var(--line-height-10)',
					letterSpacing: 'var(--letter-spacing-tighter)'
				}
			],
			'5xl': [
				'var(--font-size-5xl)',
				{
					lineHeight: 'var(--line-height-11)',
					letterSpacing: 'var(--letter-spacing-tighter)'
				}
			],
			'6xl': [
				'var(--font-size-6xl)',
				{
					lineHeight: '1',
					letterSpacing: 'var(--letter-spacing-tighter)'
				}
			],
			'7xl': [
				'var(--font-size-7xl)',
				{
					lineHeight: '1',
					letterSpacing: 'var(--letter-spacing-tighter)'
				}
			],
			'8xl': [
				'var(--font-size-8xl)',
				{
					lineHeight: '1',
					letterSpacing: 'var(--letter-spacing-tightest)'
				}
			],
			'9xl': [
				'var(--font-size-9xl)',
				{
					lineHeight: '1',
					letterSpacing: 'var(--letter-spacing-tightest)'
				}
			]
		},
		lineHeight: {
			'3': 'var(--line-height-3)',
			'4': 'var(--line-height-4)',
			'5': 'var(--line-height-5)',
			'6': 'var(--line-height-6)',
			'7': 'var(--line-height-7)',
			'8': 'var(--line-height-8)',
			'9': 'var(--line-height-9)',
			'10': 'var(--line-height-10)',
			'11': 'var(--line-height-11)',
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2'
		},
		letterSpacing: {
			tightest: 'var(--letter-spacing-tightest)',
			tighter: 'var(--letter-spacing-tighter)',
			tight: 'var(--letter-spacing-tight)',
			normal: 'var(--letter-spacing-normal)',
			wide: 'var(--letter-spacing-wide)',
			wider: 'var(--letter-spacing-wider)',
			widest: 'var(--letter-spacing-widest)'
		},
		extend: {
			colors: {
				jordy: {
					'50': 'hsla(214, 78%, 98%, 1)',
					'100': 'hsla(218, 73%, 97%, 1)',
					'200': 'hsla(214, 70%, 94%, 1)',
					'300': 'hsla(216, 70%, 88%, 1)',
					'400': 'hsla(216, 68%, 81%, 1)',
					'500': 'hsla(216, 66%, 71%, 1)',
					'600': 'hsla(216, 64%, 60%, 1)',
					'700': 'hsla(215, 71%, 47%, 1)',
					'800': 'hsla(214, 88%, 32%, 1)',
					'900': 'hsla(215, 94%, 18%, 1)',
					'950': 'hsla(224, 100%, 5%, 1)'
				},
				celery: {
					'50': 'hsla(75, 44%, 96%, 1)',
					'100': 'hsla(77, 50%, 95%, 1)',
					'200': 'hsla(77, 48%, 88%, 1)',
					'300': 'hsla(76, 49%, 78%, 1)',
					'400': 'hsla(75, 49%, 63%, 1)',
					'500': 'hsla(73, 40%, 51%, 1)',
					'600': 'hsla(73, 40%, 41%, 1)',
					'700': 'hsla(73, 42%, 32%, 1)',
					'800': 'hsla(73, 45%, 21%, 1)',
					'900': 'hsla(74, 53%, 12%, 1)',
					'950': 'hsla(77, 78%, 2%, 1)'
				},
				gold: {
					'50': 'hsla(51, 93%, 95%, 1)',
					'100': 'hsla(50, 95%, 92%, 1)',
					'200': 'hsla(50, 95%, 83%, 1)',
					'300': 'hsla(50, 95%, 66%, 1)',
					'400': 'hsla(51, 84%, 52%, 1)',
					'500': 'hsla(51, 78%, 46%, 1)',
					'600': 'hsla(51, 79%, 39%, 1)',
					'700': 'hsla(51, 81%, 32%, 1)',
					'800': 'hsla(51, 85%, 24%, 1)',
					'900': 'hsla(51, 90%, 16%, 1)',
					'950': 'hsla(51, 92%, 10%, 1)'
				},
				salmon: {
					'50': 'hsla(352, 100%, 97%, 1)',
					'100': 'hsla(354, 100%, 96%, 1)',
					'200': 'hsla(353, 100%, 94%, 1)',
					'300': 'hsla(351, 96%, 89%, 1)',
					'400': 'hsla(351, 89%, 83%, 1)',
					'500': 'hsla(349, 82%, 74%, 1)',
					'600': 'hsla(345, 74%, 62%, 1)',
					'700': 'hsla(343, 58%, 48%, 1)',
					'800': 'hsla(337, 100%, 29%, 1)',
					'900': 'hsla(350, 100%, 18%, 1)',
					'950': 'hsla(0, 100%, 5%, 1)'
				},
				apricot: {
					'50': 'hsla(13, 90%, 96%, 1)',
					'100': 'hsla(10, 92%, 95%, 1)',
					'200': 'hsla(12, 90%, 92%, 1)',
					'300': 'hsla(12, 85%, 87%, 1)',
					'400': 'hsla(12, 82%, 80%, 1)',
					'500': 'hsla(11, 77%, 71%, 1)',
					'600': 'hsla(11, 72%, 60%, 1)',
					'700': 'hsla(11, 74%, 46%, 1)',
					'800': 'hsla(5, 100%, 33%, 1)',
					'900': 'hsla(0, 100%, 22%, 1)',
					'950': 'hsla(0, 100%, 11%, 1)'
				},
				'color-1': 'hsl(var(--color-1))',
				'color-2': 'hsl(var(--color-2))',
				'color-3': 'hsl(var(--color-3))',
				'color-4': 'hsl(var(--color-4))',
				'color-5': 'hsl(var(--color-5))'
			},
			fontFamily: {
				euclid: [
					'var(--font-euclid)'
				]
			},
			animation: {
				rainbow: 'rainbow var(--speed, 2s) infinite linear',
				aurora: "aurora 60s linear infinite"
			},
			keyframes: {
				rainbow: {
					'0%': {
						'background-position': '0%'
					},
					'100%': {
						'background-position': '200%'
					}
				},
				aurora: {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
					},
				},
			}
		}
	},
	plugins: [require("tailwindcss-animate"), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}