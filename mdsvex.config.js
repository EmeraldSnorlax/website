import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { derunt } from './remark/derunt.js';
import rehypeShiki from '@shikijs/rehype'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		quotes: true,
		ellipses: true,
		backticks: false,
		dashes: 'oldschool'
	},

	remarkPlugins: [derunt],
	rehypePlugins: [rehypeShiki({ theme: 'vesper' })]
});

export default config;
