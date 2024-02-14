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

<div
	role="img"
	class="block w-full"
>
	{#if browser}
		{#each fragments as row, y}
			<div class="rows flex">
				{#each row as fragment, x}
					<div class={`cols w-1/3`}>
						{#if (x === 0 && y === 1) || (x === 2 && y === 2) || (x === 2 && y === 0)}
							<!-- cool no signal crts, give them each a unique id by adding row and col so we can offset them slightly -->
							<Crt>
								<div class="no-signal">
									<canvas
										bind:this={fragment}
										width={200}
										height={200}
										class="aspect-square w-full"
									/>
								</div>
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

<style lang="postcss">
	canvas {
		@apply aspect-square w-full;
	}

	/* crt effects */
	.no-signal {
		@apply inset-full h-[150%] w-[150%];
		background: url('/no_signal.webp');
	}

	.rows:nth-child(3) > .cols:nth-child(3) .no-signal {
		animation:
			shift-static 0.15s infinite steps(2),
			flicker 3s infinite steps(6);
		@apply -scale-x-100 -scale-y-100;
	}
	.rows:nth-child(1) > .cols:nth-child(3) .no-signal {
		animation:
			shift-static 1.01s infinite steps(6),
			flicker 12s infinite steps(6);
		@apply -scale-x-100;
		animation-direction: reverse;
	}
	.rows:nth-child(2) > .cols:nth-child(1) .no-signal {
		animation:
			shift-static 0.53s infinite steps(6),
			flicker 5s infinite steps(6);
		@apply invert;
	}

	@media (prefers-reduced-motion) {
		.no-signal {
			animation: none;
		}
	}

	@media not (prefers-reduced-motion) {
		@keyframes shift-static {
			0% {
				transform: translateX(-10%) translateY(-10%);
			}

			100% {
				transform: translateX(-5%) translateY(2%);
			}
		}

		@keyframes flicker {
			0% {
				opacity: 0.8;
			}
			49% {
				opacity: 0.8;
			}
			50% {
				opacity: 0.5;
			}
			51% {
				opacity: 0.8;
			}
			60% {
				opacity: 0.4;
			}
			70% {
				opacity: 0.8;
			}
			100% {
				opacity: 0.8;
			}
		}
	}

	/* offset the crts so they aren't in a perfect grid, and make each column slightly float up and down with a little offset from each other */
	.cols:nth-child(1) {
		@apply translate-y-2;
		animation: first 2s infinite steps(2);
	}
	.cols:nth-child(2) {
		@apply translate-y-6;
		animation: second 4s infinite steps(2) reverse;
	}
	.cols:nth-child(3) {
		@apply -translate-y-4;
		animation: third 3s infinite steps(2);
	}
	.rows:nth-child(1) > .cols:nth-child(1) {
		@apply -translate-y-2;
	}
	.rows:nth-child(3) > .cols:nth-child(3) {
		@apply translate-y-2;
		animation: third 3s infinite steps(2);
	}

	@media not (prefers-reduced-motion) {
		@keyframes first {
			0% {
				transform: translateY(2%);
			}
			50% {
				transform: translateY(6%);
			}
			100% {
				transform: translateY(2%);
			}
		}
		@keyframes second {
			0% {
				transform: translateY(-6%);
			}
			50% {
				transform: translateY(0%);
			}
			100% {
				transform: translateY(-6%);
			}
		}
		@keyframes third {
			0% {
				transform: translateY(-4%);
			}
			50% {
				transform: translateY(-10%);
			}
			100% {
				transform: translateY(-4%);
			}
		}
	}
</style>
