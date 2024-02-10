<script lang="ts">
	import Crt from '$lib/Crt.svelte';

	import { loadParts } from '$lib/avatar/parts';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { draw } from '$lib/avatar';

	let rain: OffscreenCanvas;
	let fragments: HTMLCanvasElement[][] = [];

	if (browser) {
		onMount(async () => {
			fragments = [
				[
					document.createElement('canvas'),
					document.createElement('canvas'),
					document.createElement('canvas')
				],
				[
					document.createElement('canvas'),
					document.createElement('canvas'),
					document.createElement('canvas')
				],
				[
					document.createElement('canvas'),
					document.createElement('canvas'),
					document.createElement('canvas')
				]
			];
			rain = new OffscreenCanvas(600, 600);
			if (!rain) return;
			const parts = await loadParts();
			const fullCtx = rain.getContext('2d');
			if (!fullCtx) return;
			draw(fullCtx, [
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
			fragments.forEach((row, y) => {
				row.forEach((fragment, x) => {
					const ctx = fragment.getContext('2d');
					if (!ctx) return;
					ctx.drawImage(rain, x * 200, y * 200 - 20, 200, 200, 0, 0, 200, 200);
				});
			});
		});
	}
</script>

<svelte:head>
	<link rel="preload" media="not (prefers-reduced-motion)" as="image" href="/bg/180.apng" />
	<link rel="preload" as="image" href="/av/body.png" />
	<link rel="preload" as="image" href="/av/hair.png" />
	<link rel="preload" as="image" href="/av/eyes-011.png" />
	<link rel="preload" as="image" href="/av/mouth-009.png" />
	<link rel="preload" as="image" href="/av/eyebrows-001.png" />
	<link rel="preload" as="image" href="/av/halo-003.png" />
	<link rel="preload" as="image" href="/av/outfit-018.png" />
	<link rel="preload" as="image" href="/av/glasses.png" />
	<link rel="preload" as="image" href="/av/shadow.png" />
</svelte:head>

<main class="min-h-screen px-8">
	<div class="m-auto hidden sm:block sm:max-h-screen">
		{#if browser}
			{#each fragments as row, y}
				<div class="flex h-1/3 w-1/3">
					{#each row as fragment, x}
						<div class="-mt-[calc(15% + 10px)] w-1/3 min-w-16">
							{#if (x === 0 && y === 1) || (x === 2 && y === 2) || (x === 2 && y === 0)}
								<!-- cool no signal crts, give them each a unique id by adding row and col so we can offset them slightly -->
								<Crt>
									<div class={`no-signal no-signal-${x + y}`}></div>
								</Crt>
							{:else if !(x === 2 && y === 0)}
								<!-- the rain fragments-->
								<Crt>
									<canvas
										bind:this={fragment}
										width={200}
										height={200}
										class="aspect-square w-full"
									/>
								</Crt>
							{/if}
						</div>
					{/each}
				</div>
			{/each}
		{/if}
	</div>
	<h1>Hello, chat.</h1>
</main>

<style lang="postcss">
	@media not (prefers-reduced-motion) {
		main {
			background: url('/bg/180.apng') fixed;
			image-rendering: pixelated;
			@apply bg-cover;
		}
	}
	canvas {
		@apply aspect-square w-full;
	}
	.no-signal {
		@apply inset-full h-[150%] w-[150%];
		background: url('/no_signal.png');
	}
	.no-signal-1 {
		animation: shift 0.53s infinite steps(6);
		@apply invert;
	}
	.no-signal-2 {
		animation: shift 0.15s infinite steps(2);
		@apply -scale-x-100 -scale-y-100;
	}
	.no-signal-4 {
		animation: shift 1.01s infinite steps(6);
		@apply -scale-x-100;
		animation-direction: reverse;
	}
	@media (prefers-reduced-motion) {
		.no-signal {
			animation: none;
		}
	}

	@keyframes shift {
		0% {
			transform: translateX(-10%) translateY(-10%);
		}

		100% {
			transform: translateX(-5%) translateY(2%);
		}
	}
</style>
