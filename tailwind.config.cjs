/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ['NeueBit', 'sans-serif'],
			'serif': ['Mondwest', 'serif'],
		}
	},

	plugins: []
};

module.exports = config;
