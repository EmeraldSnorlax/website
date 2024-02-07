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
      draw(ctx, parts, ['eyes-011', 'eyebrows-001', 'mouth-009', 'outfit-018', 'halo-003']);
    })
	}
</script>

<canvas bind:this={canvas} width={600} height={600} />

<div class="crt-wrapper">
	<Crt>
		<div class="crt-content"></div>
	</Crt>
</div>

<style lang="postcss">
	.crt-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 23rem;
		aspect-ratio: 1/1;
	}

	.crt-content {
		background-color: red;
		height: 100%;
		width: 100%;
	}
</style>
