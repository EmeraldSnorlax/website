<script context="module" lang="ts">
	import '@emeraldsnorlax/pp-fonts/EditorialNew';
	import editorialNewUrl from '@emeraldsnorlax/pp-fonts/EditorialNew/Regular.woff2?url';
	import editorialNewItalicUrl from '@emeraldsnorlax/pp-fonts/EditorialNew/Italic.woff2?url';
	import editorialNewBoldUrl from '@emeraldsnorlax/pp-fonts/EditorialNew/Bold.woff2?url';
	import editorialNewBoldItalicUrl from '@emeraldsnorlax/pp-fonts/EditorialNew/BoldItalic.woff2?url';

	import h1 from './h1.svelte';
	import h2 from './h2.svelte';
	import h3 from './h3.svelte';
	import h4 from './h4.svelte';
	import h5 from './h5.svelte';
	import h6 from './h6.svelte';
	import p from './p.svelte';
	import a from './a.svelte';
	import ul from './ul.svelte';
	import ol from './ol.svelte';
	import li from './li.svelte';
	import blockquote from './blockquote.svelte';
	export { h1, h2, h3, h4, h5, h6, p, a, ul, ol, li, blockquote };

	import PixelarticonsInfoBox from '~icons/pixelarticons/info-box';
	import PixelarticonsLabel from '~icons/pixelarticons/label';
</script>

<script>
	// @ts-nocheck mdsvex is so cool for not supporting typescript
	import dayjs from 'dayjs';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	// see App.Post in src/app.d.ts for the shape of a post...
	let post = { ...$$props };
	const unfuckedDate = new Date(Date.parse(post.date));
	post.date = unfuckedDate; // mdsvex is double cool for reading the frontmatter date as a string
	let theme;

	if (browser) {
		theme =
			(localStorage.getItem('theme')) ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	}
	$: (() => {
		if (browser) {
			localStorage.setItem('theme', theme);
		}
	})();
</script>

<svelte:head>
	<link rel="preload" href={editorialNewUrl} as="font" type="font/woff2" crossorigin="anonymous" />
	<link
		rel="preload"
		href={editorialNewItalicUrl}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href={editorialNewBoldUrl}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href={editorialNewBoldItalicUrl}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class={theme}>
	<div
		class={`mx-auto max-w-[160ch] border-2 border-neutral-300 bg-slate-500 dark:border-neutral-400 dark:bg-slate-800 sm:mt-16`}
	>
		<div class="bg-neutral-300 px-2 pt-0.5 font-sans text-2xl dark:bg-neutral-800 sm:text-3xl">
			<a
				aria-label="Back to post list"
				id="back-to-post-list"
				class="-me-0.5 inline-block text-neutral-700 hover:text-blue-700 dark:text-neutral-400"
				href="/p"
				><span aria-hidden="true">/</span><span class="font-normal underline underline-offset-2"
					>posts</span
				><span aria-hidden="true">/</span></a
			>
			<span class="-ms-0.5 inline-block font-bold lowercase dark:text-neutral-400" id="slug"
				>{post.slug}</span
			>
		</div>

		<div class="flex justify-between bg-neutral-400 px-2 dark:bg-neutral-700">
			<header>
				<div class="flex w-full items-center text-lg">
					<PixelarticonsInfoBox class="me-2 h-4 w-4 text-neutral-700" role="presentation" />
					<div class="mt-1">
						<span class="-mb-3 text-neutral-900 dark:text-neutral-200"
							>Created: <time
								class="font-bold text-neutral-900 dark:text-neutral-200"
								datetime={dayjs(unfuckedDate).format('YYYY-MM-DD')}
								>{dayjs(unfuckedDate).format('YYYY-MMM-DD')}</time
							></span
						>
						<ul aria-label="post tags" class="flex">
							{#if post.tags}
								{#each post.tags as tag}
									<li class="me-1 flex items-center text-lg text-neutral-900 dark:text-neutral-300">
										<PixelarticonsLabel
											role="presentation"
											class="me-0.5 h-3 w-3 text-neutral-500 dark:text-neutral-400"
										/><span>{tag}</span>
									</li>
								{/each}
							{/if}
						</ul>
					</div>
				</div>
			</header>
			<div class="mt-2 flex max-w-lg flex-col items-end text-neutral-900 dark:text-neutral-200">
				<label>
					Theme:
					<select class="dark:bg-neutral-500" bind:value={theme}>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
					</select>
				</label>
			</div>
		</div>
		<!-- page margin ruler type thingy, purely decorative. -->
		<div
			aria-hidden="true"
			class="hidden h-3 border-t-2 border-neutral-600 bg-neutral-300 dark:invert lg:block"
		>
			<div
				id="page-ruler-top"
				class="mx-auto w-[120ch] justify-between border-x-2 border-neutral-700 bg-neutral-100"
			/>
		</div>

		<div class="flex w-full justify-center border-t-2 border-black">
			<article
				class="w-full max-w-[120ch] bg-neutral-50 p-4 dark:bg-neutral-900 sm:mx-6 sm:my-12 sm:border-x-4 sm:border-b-8 sm:border-t-4 sm:border-black sm:p-16"
			>
				<slot />
			</article>
		</div>
	</div>
</div>

<style lang="postcss">
	#slug::after {
		@apply text-base text-neutral-600;
		content: '.md';
	}

	#page-ruler-top::before {
		@apply block h-1 w-full;
		content: '';
		background: repeating-linear-gradient(
			to right,
			theme('colors.neutral.300'),
			theme('colors.neutral.300') 1em,
			theme('colors.neutral.100') 1.1rem,
			theme('colors.neutral.100') 1.1rem
		);
	}

	#page-ruler-top::after {
		content: '';
		@apply block h-2 w-full;
		background: repeating-linear-gradient(
			to right,
			theme('colors.neutral.100'),
			theme('colors.neutral.100') 1rem,
			theme('colors.neutral.400') 1rem,
			theme('colors.neutral.400') 1.1rem
		);
	}

	select {
		@apply h-6 border border-neutral-800 bg-neutral-200 px-1 py-0.5 font-bold;
	}
</style>
