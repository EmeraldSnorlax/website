<script lang="ts">
	import CrtGrid from './CrtGrid.svelte';
</script>

<svelte:head>
	<link rel="preload" media="not (prefers-reduced-motion)" as="image" href="/bg/180.apng" />
</svelte:head>

<main class="min-h-screen px-8">
	<div class="lg:grid lg:grid-cols-9 lg:grid-rows-1 lg:gap-8 w-2/3 lg:w-auto m-auto">
		<div class="lg:w-full lg:max-h-[50%] lg:col-span-3 lg:col-start-2 max-h-1/3 max-w-128 block">
			<CrtGrid />
		</div>
		<div class="col-span-3 col-start-6">
			<h1 class="text-white">Hello, chat.</h1>
		</div>
	</div>
</main>

<style lang="postcss">
	@media not (prefers-reduced-motion) {
		:global(body) {
			background: url('/bg/180.apng') fixed;
			image-rendering: pixelated;
			@apply bg-cover;
		}
	}
</style>
