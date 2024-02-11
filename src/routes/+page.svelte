<script lang="ts">
	import CrtGrid from './CrtGrid.svelte';
</script>

<main class="mt-16 h-full min-h-screen px-8 lg:mt-0">
	<div
		class="m-auto w-2/3 lg:grid lg:h-full lg:min-h-screen lg:w-auto lg:grid-cols-9 lg:grid-rows-1 lg:gap-4"
	>
		<div class="max-w-128 lg:sticky lg:top-0 lg:col-span-3 lg:col-start-2 lg:h-screen lg:w-full">
			<div class="flex h-full items-center">
				<CrtGrid />
			</div>
		</div>
		<div class="col-span-3 col-start-6 lg:flex lg:my-auto lg:flex-col lg:justify-center bg-stone-950 window">
			<h1>Hello, chat.</h1>
			<p>
				I'm <b>Rain</b> <span class="font-sans text-gray-50">(they/them)</span>, a bad web and
				full-stack developer that likes Svelte.
			</p>
			<p>
				You can find me writing <a rel="noopener" href="https://github.com/EmeraldSnorlax"
					>code on GitHub</a
				>, posting <a href="/blog">on my blog</a>, and playing
				<a rel="noopener" href="https://steamcommunity.com/id/EmeraldSnorlax">games on Steam</a>.
			</p>
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
		@keyframes bob {
			0% {
				transform: translateY(0);
			}
			50% {
				transform: translateY(-0.25rem);
			}
			100% {
				transform: translateY(0);
			}
		}
		.window {
			animation: bob 5s infinite steps(6);
		}
	}

</style>
