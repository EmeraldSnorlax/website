<script context="module" lang="ts">
	import h1 from './h1.svelte';
	import h2 from './h2.svelte';
	import h3 from './h3.svelte';
	import h4 from './h4.svelte';
	import h5 from './h5.svelte';
	import h6 from './h6.svelte';
	import p from './p.svelte';
	import a from './a.svelte';
	export { h1, h2, h3, h4, h5, h6, p, a };

	import PixelarticonsInfoBox from '~icons/pixelarticons/info-box';
	import PixelarticonsLabel from '~icons/pixelarticons/label';
	import PixelarticonsArrowBarRight from '~icons/pixelarticons/arrow-bar-right';
	import PixelarticonsArrowBarLeft from '~icons/pixelarticons/arrow-bar-left';
</script>

<script lang="ts">
	import dayjs from 'dayjs';
	// mdsvex is so cool for not supporting typescript
	// see App.Post in src/app.d.ts for the shape of a post...
	let post = { ...$$props };
	const unfuckedDate = new Date(Date.parse(post.date));
	post.date = unfuckedDate; // mdsvex is double cool for reading the frontmatter date as a string
</script>

<article class="mx-auto max-w-[160ch] border-2 border-neutral-300 bg-slate-500 sm:mt-16">
	<header>
		<div class="bg-neutral-300 px-2 pt-0.5 font-sans text-2xl sm:text-3xl">
			<a
				id="back-to-post-list"
				class="-me-0.5 inline-block text-neutral-700 hover:text-blue-700"
				href="/p">/<span class="font-normal underline underline-offset-2">posts</span>/</a
			>
			<span class="-ms-0.5 inline-block font-bold lowercase" id="slug">{post.slug}</span>
		</div>
		<section class="flex w-full items-center bg-neutral-400 px-2 text-lg">
			<PixelarticonsInfoBox class="me-2 h-4 w-4 text-neutral-700" role="presentation" />
			<div class="mt-1">
				<span class="-mb-3 text-neutral-800"
					>Created: <time
						class="font-bold text-neutral-900"
						datetime={dayjs(unfuckedDate).format('YYYY-MM-DD')}
						>{dayjs(unfuckedDate).format('YYYY-MMM-DD')}</time
					></span
				>
				<ul aria-label="post tags" class="flex">
					{#if post.tags}
						{#each post.tags as tag}
							<li class="me-1 flex items-center text-base text-neutral-900">
								<PixelarticonsLabel
									role="presentation"
									class="me-0.5 h-3 w-3 text-neutral-500"
								/><span>{tag}</span>
							</li>
						{/each}
					{/if}
				</ul>
			</div>
		</section>

		<!-- page margin ruler type thingy, purely decorative -->
		<div
			aria-hidden="true"
			class="hidden h-3 border-t-2 border-neutral-600 bg-neutral-300 lg:block"
		>
			<div
				id="page-ruler-top"
				class="mx-auto w-[120ch] justify-between border-x-2 border-neutral-700 bg-neutral-100"
			/>
			<!-- arrow handles -->
			<div class="mx-auto w-[120ch] px-16 flex items-center justify-between text-blue-900 -translate-y-3.5">
				<PixelarticonsArrowBarRight class="-translate-x-[90%]  h-4 w-4" />
				<PixelarticonsArrowBarLeft class="translate-x-[90%] h-4 w-4" />
			</div>
		</div>
	</header>

	<div class="flex w-full justify-center border-t-2 border-black">
		<section
			class="max-w-[120ch] bg-neutral-50 p-4 sm:mx-6 sm:my-12 sm:border-x-4 sm:border-b-8 sm:border-t-4 sm:border-black sm:p-16"
		>
			<slot />
		</section>
	</div>
</article>

<style lang="postcss">
	#slug::after {
		content: '.md';
		@apply text-base text-neutral-500 sm:text-2xl;
	}

	#page-ruler-top::before {
		content: '';
		@apply block h-1 w-full;
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
