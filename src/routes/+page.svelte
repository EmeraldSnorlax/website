<script>
	import Crt from '$lib/Crt.svelte';
	import Rain from '$lib/Rain.svelte';
</script>

<svelte:head>
	<link rel="preload" media="not (prefers-reduced-motion)" as="image" href="/bg/240.apng" />
</svelte:head>

<main class="min-h-screen px-8">
	<div class="grid scale-50 grid-cols-4 grid-rows-3">
		<div class="col-start-2 row-start-1 translate-y-8"><Crt /></div>
		<div class="col-start-3 row-start-1 translate-x-4"><Crt /></div>

		<div class="col-start-1 row-start-2 translate-y-9 -translate-x-3"><Crt /></div>
		<div class="col-start-2 row-start-2"><Crt><Rain /></Crt></div>
		<div class="col-start-3 row-start-2 translate-x-2 -translate-y-12"><Crt /></div>

		<div class="row-start-3 -translate-x-4 "><Crt /></div>
		<div class="col-start-2 row-start-3 -translate-x-3 -translate-y-8"><Crt /></div>
		<div class="col-start-3 row-start-3 -translate-y-12 translate-x-4"><Crt /></div>

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
