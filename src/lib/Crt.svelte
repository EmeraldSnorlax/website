<div class="relative aspect-square h-full w-full overflow-clip -mb-4">
	<div class="frame-inner relative m-auto aspect-square">
		<slot />
	</div>
</div>

<style lang="postcss">
	.frame-inner::after {
		/* vignette */
		content: '';
		@apply pointer-events-none fixed left-0 top-0 h-full w-full;
		background: radial-gradient(ellipse at center, rgba(0, 0, 0, 10%) 50%, black 100%);
	}

	.frame-inner,
	.frame-inner::after {
		/* mask to the slight curved shape. */
		mask-image: url('/crt_mask.webp');
		/* i don't know WHY THE FUCK this is needed, or even what these numbers mean, but here we are. */
		mask-size: 125%;
		mask-position: center 22.5%;
	}

	.frame-inner {
		background: radial-gradient(circle, rgba(5, 17, 30, 1) 0%, rgba(148, 24, 24, 1) 100%);
		container-type: size;
		@apply h-full w-full;
	}
</style>
