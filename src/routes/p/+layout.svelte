<script lang="ts">
	import { browser } from '$app/environment';
	import Crt from '$lib/Crt.svelte';
	import { draw } from '$lib/avatar';
	import { loadPart, loadParts } from '$lib/avatar/parts';
	import { onMount } from 'svelte';

	import neueBitUrl from '@emeraldsnorlax/pp-fonts/NeueBit/Regular.woff2?url';

	let canvas: HTMLCanvasElement;

	async function rainUnhover(canvas: HTMLCanvasElement) {
		const ctx = canvas.getContext('2d');
		if (!ctx || !browser) return;
		const parts = await loadParts();
		draw(ctx, [
			parts.body,
			parts.hair,
			parts['eyes-011'],
			parts['mouth-009'],
			parts['eyebrows-001'],
			parts['halo-003'],
			parts['outfit-018'],
			parts.glasses,
			parts.shadow
		]);
	}

	async function rainHover(canvas: HTMLCanvasElement) {
		const ctx = canvas.getContext('2d');
		if (!ctx || !browser) return;

		// Fetch all the parts in parallel
		const [parts, additionalParts] = await Promise.all([
			loadParts(),
			Promise.all([
				loadPart('/av/eyes-009.webp', 'eyes', 'eyes-009'),
				loadPart('/av/mouth-010.webp', 'mouth', 'mouth-010'),
				loadPart('/av/eyebrows-000.webp', 'eyebrows', 'eyebrows-000'),
				loadPart('/av/halo-002.webp', 'halo', 'halo-002')
			])
		]);

		draw(ctx, [
			parts.body,
			parts.hair,
			...additionalParts,
			parts['outfit-018'],
			parts.glasses,
			parts.shadow
		]);
	}

	onMount(async () => {
		rainUnhover(canvas);
	});
</script>

<link rel="preload" href={neueBitUrl} as="font" type="font/woff2" crossorigin="anonymous" />

<div>
	<nav class="mx-auto my-2 max-w-3xl">
		<ul class="flex flex-col items-center justify-between sm:flex-row sm:items-end">
			<li>
				<a
					on:mouseenter={() => {
						rainHover(canvas);
					}}
					on:mouseleave={() => {
						rainUnhover(canvas);
					}}
					on:focusin={() => {
						rainHover(canvas);
					}}
					on:focusout={() => {
						rainUnhover(canvas);
					}}
					href="/p"
					class="window flex flex-col bg-blue-950"
				>
					<Crt>
						<canvas
							class="block aspect-square h-16 w-16 sm:h-28 sm:w-28"
							width={600}
							height={600}
							bind:this={canvas}
						/>
					</Crt>
					<span class="block text-xl font-bold sm:text-2xl">Rain's scribbles</span>
				</a>
			</li>
			<li class="mt-4">
				<a href="/" class="sm:window flex flex-col sm:bg-red-950">
					<span class="block text-xl sm:text-2xl">About Me</span></a
				>
			</li>
		</ul>
	</nav>
	<main>
		<slot />
	</main>
</div>
<noscript>
	<style lang="postcss">
		canvas {
			background-image: url('av/nojs.webp');
			background-size: cover;
		}
	</style>
</noscript>

<style lang="postcss">
	a {
		@apply link;
	}
</style>
