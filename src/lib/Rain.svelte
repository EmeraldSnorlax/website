<script lang="ts">
	import Crt from '$lib/Crt.svelte';
	import { loadParts } from '$lib/avatar/parts';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { draw } from '$lib/avatar';
	let canvas: HTMLCanvasElement;
	if (browser) {
		onMount(async () => {
			if (!canvas) return;
			const parts = await loadParts();
			const ctx = canvas.getContext('2d');
			if (!ctx) return;
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
		});
	}
</script>

<div class="aspect-square block">
			<canvas bind:this={canvas} width={600} height={600} class="w-full aspect-square"/>
</div>

<style lang="postcss">
	@container (width > 256px) {
		canvas {
			@apply blur-[1px];
		}
	}

	@media not (prefers-reduced-motion) {
		canvas {
			animation: shake 0.01s infinite steps(6);
		}
	}

	@keyframes shake {
		0% {
			transform: translate(0.9px, 0.1px);
		}
		50% {
			transform: translateX(0.3px);
		}
		100% {
			transform: translate(-0.1px, -0.1px);
		}
	}
</style>
