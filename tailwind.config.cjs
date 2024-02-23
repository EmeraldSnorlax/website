/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ['NeueBit', 'NeueBit Fallback', 'Arial', 'sans-serif'],
			'serif-bitmap': ['Mondwest', 'Mondwest Fallback', 'Times New Roman', 'serif'],
			fragment: ['Fragment Text', 'sans-serif'],
			mono: ['Monaspace Xenon', 'monospace']
		}
	},
	darkMode: 'media',
	plugins: []
};

module.exports = config;
