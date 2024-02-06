<script>
	import Crt from './Crt.svelte';
</script>

<div class="crt-wrapper">
	<Crt>
    <div class="crt-content">

    </div>
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
    width: 100%;
    height: 100%;
  }
</style>
