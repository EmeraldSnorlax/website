import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { derunt } from './remark/derunt.js';
import { codeToHtml } from 'shiki';
import theme from './syntaxTheme.js'

async function highlighter(code, lang) {
	return await codeToHtml(code, {
		lang,
		theme,
		transformers: [
			{
				pre: (node) => {
					// why the fuck does shiki set a tab index???
					node.properties.tabindex = null;
				}
			}
		]
	});
}

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		_: './src/routes/p/mdsvex/MdsvexLayout.svelte'
	},
	highlight: {
		highlighter
	},
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
