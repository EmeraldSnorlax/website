<script lang="ts">
	import Crt from '$lib/Crt.svelte';

	import { loadParts } from '$lib/avatar/parts';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { draw } from '$lib/avatar';

	let rain: HTMLCanvasElement;
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
					ctx.drawImage(rain, x * 200, y * 200 - 50, 200, 200, 0, 0, 200, 200);
				});
			});
		});
	}
</script>

<svelte:head>
	<link rel="preload" media="not (prefers-reduced-motion)" as="image" href="/bg/240.apng" />
</svelte:head>

<canvas bind:this={rain} width={600} height={600} class="hidden aspect-square w-full" />

{#if browser}
	<main class="min-h-screen px-8">
		{#each fragments as row, y}
			<div class="flex">
				{#each row as fragment, x}
					<div class="w-1/3">
						{#if (x === 0 && y === 1) || (x === 2 && y ===2)}
						<!-- cool static crts :)-->
						<Crt />
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
	</main>
{/if}

<style lang="postcss">
	@media not (prefers-reduced-motion) {
		main {
			background: url('/bg/240.apng') fixed;
			image-rendering: pixelated;
			@apply bg-cover;
		}
	}
	canvas {
		@apply aspect-square w-full;
	}
</style>
