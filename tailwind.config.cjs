/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ['NeueBit', "NeueBit Fallback", 'Arial', 'sans-serif'],
			'serif': ['Mondwest', 'Mondwest Fallback', 'Times New Roman', 'serif'],
		}
	},
	darkMode: 'class',
	plugins: []
};

module.exports = config;
