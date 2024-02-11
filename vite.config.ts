import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { FontaineTransform } from 'fontaine';

const fontaineOptions = {
  fallbacks: ['BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans'],
  // You may need to resolve assets like `/fonts/Roboto.woff2` to a particular directory
}

export default defineConfig({
	plugins: [sveltekit(), FontaineTransform.vite(fontaineOptions)],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
