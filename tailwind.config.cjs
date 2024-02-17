/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ['NeueBit', "NeueBit Fallback", 'Arial', 'sans-serif'],
			'serif': ['Editorial New', 'Times New Roman', 'serif'],
			'serif-bitmap': ['Mondwest', 'Mondwest Fallback', 'Times New Roman', 'serif'],
		}
	},
	darkMode: 'class',
	plugins: []
};

module.exports = config;
