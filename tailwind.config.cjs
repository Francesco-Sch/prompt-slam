/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'prompt-orange': {
				DEFAULT: '#FA8334'
			},
			'prompt-blue': {
				DEFAULT: '#388697'
			}
		},
		fontFamily: {
			redaction: ['Redaction', 'system-ui', 'serif'],
			'redaction-10': ['"Redaction 10"', 'system-ui', 'serif'],
			'redaction-20': ['"Redaction 20"', 'system-ui', 'serif'],
			'redaction-35': ['"Redaction 35"', 'system-ui', 'serif'],
			'redaction-50': ['"Redaction 50"', 'system-ui', 'serif'],
			'redaction-70': ['"Redaction 70"', 'system-ui', 'serif'],
			'redaction-100': ['"Redaction 100"', 'system-ui', 'serif']
		},
		extend: {
			animation: {
				'unpixelate-font': 'unpixelate-font-50-0 1s ease-in-out alternate'
			},
			keyframes: {
				'unpixelate-font-50-0': {
					'0%': { 'font-family': '"Redaction 50", "system-ui", "serif"' },
					'25%': { 'font-family': '"Redaction 35", "system-ui", "serif"' },
					'50%': { 'font-family': '"Redaction 20", "system-ui", "serif"' },
					'70%': { 'font-family': '"Redaction 10", "system-ui", "serif"' },
					'100%': { 'font-family': '"Redaction", "system-ui", "serif"' }
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
