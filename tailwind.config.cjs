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
		extend: {}
	},
	plugins: []
};
