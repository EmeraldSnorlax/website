import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { derunt } from './remark/derunt.js';
import { codeToHtml } from 'shiki';

// https://github.com/pngwn/MDsveX/issues/514#issuecomment-1547078494
// mdsvex is such a quirky little thing
async function highlighter(code, lang) {
	const html = await codeToHtml((code), {
		lang,
		theme: 'rose-pine',
		transformers: [
			{
				pre: (node) => {
					// why the fuck does shiki set a tab index???
					node.properties.tabindex = null;
				},
			},
		],
	});
	return `{@html \`<div>${html}</div>\`}`;
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
