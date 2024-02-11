<script lang="ts">
	import CrtGrid from './CrtGrid.svelte';
</script>

<svelte:head>
	<link rel="preload" media="not (prefers-reduced-motion)" as="image" href="/bg/180.apng" />
</svelte:head>

<main class="h-full min-h-screen px-8 mt-16 lg:mt-0">
	<div class="m-auto w-2/3 lg:grid lg:h-full lg:min-h-screen lg:w-auto lg:grid-cols-9 lg:grid-rows-1 lg:gap-4">
		<div
			class="max-w-128 lg:sticky lg:top-0 lg:col-span-3 lg:col-start-2 lg:w-full lg:h-screen"
		>
			<div class="flex h-full items-center">
				<CrtGrid />
			</div>
		</div>
		<div class="col-span-3 col-start-6">
			<h1 class="text-white text-3xl lg:mt-[33vh]">Hello, chat.</h1>
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
