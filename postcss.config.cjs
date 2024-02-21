/* eslint-disable @typescript-eslint/no-var-requires */

const config = {
	plugins: [
		require('tailwindcss/nesting')(require('postcss-nesting')),
		require('tailwindcss'),
		require('postcss-advanced-variables'),
		require('postcss-custom-media'),
		require('autoprefixer')
	]
};

module.exports = config;
