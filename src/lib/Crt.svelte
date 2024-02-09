<div class="frame relative aspect-square h-full w-full">
	<div class="frame-inner relative m-auto h-[60%] w-[80%] translate-y-[15%] transform">
		<slot />
	</div>
</div>

<style lang="postcss">
	.frame-inner::after {
		/* vignette */
		content: '';
		@apply pointer-events-none fixed left-0 top-0 h-full w-full;
		background: radial-gradient(ellipse at center, rgba(0, 0, 0, 10%) 70%, black 100%);
	}

	.frame-inner,
	.frame-inner::after {
		/* mask to the slight curved shape. */
		mask-image: url('/crt_mask.png');
		/* i don't know WHY THE FUCK this is needed, or even what these numbers mean, but here we are. */
		mask-size: 125%;
		mask-position: center 22.5%;
	}

	.frame::before {
		@apply absolute block h-full w-full bg-cover;
		content: '';
		background-image: url('/crt.png');
	}
</style>
