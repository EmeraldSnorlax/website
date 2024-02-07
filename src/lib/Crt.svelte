<div class="frame">
	<div class="frame-inner">
		<slot />
	</div>
</div>

<style lang="postcss">
	.frame {
		position: relative;
		width: 100%;
		height: 100%;
		aspect-ratio: 1/1;
	}
	.frame-inner {
		/* make the content have margins that fit roughly the frame.*/
		margin: auto;
		width: 80%;
		height: 60%;
		transform: translateY(15%);
		position: relative;
		@mixin crt-mask;
	}

	.frame-inner::after {
		/* vignette */
		content: '';
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: radial-gradient(ellipse at center, rgba(0, 0, 0, 10%) 70%, black 100%);
		pointer-events: none;
	}

	.frame-inner,
	.frame-inner::after {
		/* mask to the slight curved shape. */
		mask-image: url('/crt_mask.png');
		mask-repeat: no-repeat;
		/* i don't know WHY THE FUCK this is needed, or even what these numbers mean, but here we are. */
		mask-size: 125%;
		mask-position: center 22.5%;
	}

	.frame::before {
		position: absolute;
		content: '';
		display: block;
		background-image: url('/crt.png');
		background-size: cover;
		width: 100%;
		height: 100%;
	}
</style>
