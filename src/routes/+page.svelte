<script>
	import Rain from '$lib/Rain.svelte';
</script>

<svelte:head>
	<link rel="preload" media="not (prefers-reduced-motion)" as="image" href="/bg/240.apng" />
</svelte:head>

<main class="px-8">
	<div class="flex min-h-screen items-center">
		<div class="h-1/6 w-1/6 blur-[0.5px]">
			<Rain />
		</div>
		<div class="lowercase text-white ps-24 text-4xl">
			<h1 class="">Hello, traveler.</h1>
			<span>I'm rain.</span>
		</div>
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
