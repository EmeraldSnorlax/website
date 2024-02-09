<script>
	import Crt from '$lib/Crt.svelte';
	import Rain from '$lib/Rain.svelte';
</script>

<svelte:head>
	<link rel="preload" media="not (prefers-reduced-motion)" as="image" href="/bg/240.apng" />
</svelte:head>

<main class="min-h-screen px-8">
	<div class="grid grid-cols-4 grid-rows-3 gap-8">
		<div class="col-start-2 row-start-2"><Crt><Rain /></Crt></div>
		<div class="col-start-3 row-start-2">3</div>
		<div class="col-start-2 row-start-1">4</div>
		<div class="row-start-3">5</div>
		<div class="col-start-4 row-start-3">6</div>
		<div class="col-start-2 row-start-3">8</div>
		<div class="col-start-3 row-start-3">10</div>
	</div>
</main>

<style lang="postcss">
	@media not (prefers-reduced-motion) {
		main {
			background: url('/bg/240.apng') fixed;
			image-rendering: pixelated;
			@apply bg-cover;
		}
	}
</style>
