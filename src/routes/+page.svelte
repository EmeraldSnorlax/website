<script lang="ts">
	import CrtGrid from './CrtGrid.svelte';
</script>

<main class="pt-16 h-full min-h-screen lg:pt-0 lg:px-8">
	<div
		class="mx-4 lg:m-auto lg:grid lg:h-full lg:min-h-screen lg:w-auto lg:grid-cols-9 lg:grid-rows-1 lg:gap-4"
	>
		<div
			class="mx-auto mb-8 w-2/3 sm:w-2/5 lg:sticky lg:top-0 lg:col-span-3 lg:col-start-2 lg:mx-auto lg:mb-auto lg:h-screen lg:w-full"
		>
			<div class="flex h-full items-center">
				<CrtGrid />
			</div>
		</div>
		<div
			class="window max-w-prose lg:max-w-none mx-auto col-span-3 col-start-6 bg-teal-950 p-2 lg:my-auto lg:flex lg:flex-col lg:justify-center"
		>
			<h1>Hello, chat.</h1>
			<p>
				I'm <b>Rain</b> <span class="font-sans text-gray-50">(they/them)</span>, a bad web and
				full-stack developer that likes Svelte.
			</p>
			<br />
			<p>
				You can find me writing <a rel="noopener" href="https://github.com/EmeraldSnorlax"
					>code on GitHub</a
				>, posting <a href="/p">articles</a>, and playing games
				<a rel="noopener" href="https://steamcommunity.com/id/EmeraldSnorlax">on Steam</a>.
			</p>
			<br />
			<p>
				If you want to talk, I'm <b>rain.lgbt</b> on Discord.
			</p>
			<p>
				Or you can <a href="mailto:emeraldsnorlax@disroot.org">send me an email</a>.
			</p>
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
