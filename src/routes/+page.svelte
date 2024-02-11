<script lang="ts">
	import CrtGrid from './CrtGrid.svelte';
</script>

<svelte:head>
	<link rel="preload" media="not (prefers-reduced-motion)" as="image" href="/bg/180.apng" />
	<link rel="preload" as="image" href="/av/body.png" />
	<link rel="preload" as="image" href="/av/hair.png" />
	<link rel="preload" as="image" href="/av/eyes-011.png" />
	<link rel="preload" as="image" href="/av/mouth-009.png" />
	<link rel="preload" as="image" href="/av/eyebrows-001.png" />
	<link rel="preload" as="image" href="/av/halo-003.png" />
	<link rel="preload" as="image" href="/av/outfit-018.png" />
	<link rel="preload" as="image" href="/av/glasses.png" />
	<link rel="preload" as="image" href="/av/shadow.png" />
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
