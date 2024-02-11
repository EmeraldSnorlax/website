<script lang="ts">
	import CrtGrid from './CrtGrid.svelte';
</script>

<svelte:head>
	<link rel="preload" media="not (prefers-reduced-motion)" as="image" href="/bg/180.apng" />
</svelte:head>

<main class="min-h-screen px-8">
	<div class="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-8">
		<div class="lg:w-full lg:h-[65vh]">
			<CrtGrid />
		</div>
		<div>
			<h1 class="text-white">Hello, chat.</h1>
		</div>
	</div>
</main>

<style lang="postcss">
	@media not (prefers-reduced-motion) {
		main {
			background: url('/bg/180.apng') fixed;
			image-rendering: pixelated;
			@apply bg-cover;
		}
	}
</style>
