import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { derunt } from './remark/derunt.js';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		quotes: true,
		ellipses: true,
		backticks: false,
		dashes: 'oldschool'
	},

	remarkPlugins: [derunt],
	rehypePlugins: []
});

export default config;
