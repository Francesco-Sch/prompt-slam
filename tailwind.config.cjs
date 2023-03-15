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
		extend: {}
	},
	plugins: []
};
