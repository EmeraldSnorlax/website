<div class="frame">
	<div class="internal">
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
	.internal {
		margin: auto;
		width: 80%;
		height: 60%;
		transform: translateY(15%);
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
