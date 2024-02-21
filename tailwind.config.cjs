/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ['NeueBit', "NeueBit Fallback", 'Arial', 'sans-serif'],
			'serif': ['Editorial New', 'Times New Roman', 'serif'],
			'serif-bitmap': ['Mondwest', 'Mondwest Fallback', 'Times New Roman', 'serif'],
			'mono': ['Monaspace Xenon', 'monospace']
		}
	},
	darkMode: 'media',
	plugins: []
};

module.exports = config;
