<script context="module" lang="ts">
	import '@emeraldsnorlax/pp-fonts/EditorialNew';
	// import editorialNewUrl from '@emeraldsnorlax/pp-fonts/EditorialNew/Regular.woff2?url';
	// import editorialNewItalicUrl from '@emeraldsnorlax/pp-fonts/EditorialNew/Italic.woff2?url';
	// import editorialNewBoldUrl from '@emeraldsnorlax/pp-fonts/EditorialNew/Bold.woff2?url';
	// import editorialNewBoldItalicUrl from '@emeraldsnorlax/pp-fonts/EditorialNew/BoldItalic.woff2?url';

	import img from './img.svelte';
	export { img };

	import PixelarticonsInfoBox from '~icons/pixelarticons/info-box';
	import PixelarticonsLabel from '~icons/pixelarticons/label';
</script>

<script>
	// @ts-nocheck mdsvex is so cool for not supporting typescript
	import dayjs from 'dayjs';
	import './posts.pcss';

	// see App.Post in src/app.d.ts for the shape of a post...
	let post = { ...$$props };
	const unfuckedDate = new Date(Date.parse(post.date));
	post.date = unfuckedDate; // mdsvex is double cool for reading the frontmatter date as a string
</script>

<!-- <svelte:head>
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
</svelte:head> -->

<div
	class={`mx-auto max-w-[160ch] border-2 border-neutral-300 bg-slate-500 sm:mt-16 dark:border-neutral-400 dark:bg-slate-800`}
>
	<div class="bg-neutral-300 px-2 pt-0.5 font-sans text-2xl sm:text-3xl dark:bg-neutral-800">
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
	</div>
	<!-- page margin ruler type thingy, purely decorative. -->
	<div
		aria-hidden="true"
		class="hidden h-3 border-t-2 border-neutral-600 bg-neutral-300 lg:block dark:invert"
	>
		<div
			id="page-ruler-top"
			class="mx-auto w-[120ch] justify-between border-x-2 border-neutral-700 bg-neutral-100"
		/>
	</div>

	<div class="flex w-full justify-center border-t-2 border-black">
		<article
			class="w-full max-w-[120ch] bg-neutral-50 p-4 sm:mx-6 sm:my-12 sm:border-x-4 sm:border-b-8 sm:border-t-4 sm:border-black sm:p-16 dark:bg-neutral-900"
		>
			<slot />
		</article>
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
</style>
