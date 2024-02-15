<script lang="ts">
	import { onMount } from 'svelte';
	import CrtGrid from './CrtGrid.svelte';

	let main: HTMLElement;
	onMount(() => {
		let okWithAnimation = window.matchMedia('not (prefers-reduced-motion)').matches;

		// TODO: check back to see if this is still needed as the endpoint matures
		// https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType
		// https://caniuse.com/mdn-api_networkinformation_effectivetype
		let slowConnection;
		try {
			if ((navigator as any).connection.effectiveType) {
				const connectionType = (navigator as any).connection.effectiveType;
				slowConnection =
					connectionType === 'slow-2g' || connectionType === '2g' || connectionType === '3g';
			}
		} catch {
			// default to fast connection if the navigator doesn't exist
			slowConnection = false;
		}

		if (okWithAnimation && !slowConnection) {
			main.style.backgroundImage = 'url(/bg/180.apng)';
		} else {
			main.style.backgroundImage = 'url(/bg/180.webp)';
		}
	});
</script>

<noscript>
	<style lang="postcss">
		main {
			background-image: url('/bg/180.webp');
		}

		.hero {
			background: url('/av/nojs.webp');
			background-position: bottom;
			@apply mx-auto aspect-square h-full w-full bg-contain bg-no-repeat sm:h-48 sm:w-48 bg-red-950 sm:bg-cover lg:my-auto lg:max-h-[30vh] sm:window;
		}
		.hero-parent {
			@apply flex items-center;
		}
	</style>
</noscript>

<main class="h-full min-h-screen pt-16 lg:px-8 lg:pt-0 neon-link" bind:this={main}>
	<div
		class="mx-4 lg:m-auto lg:grid lg:min-h-screen lg:w-auto lg:grid-cols-9 lg:grid-rows-1 lg:gap-4"
	>
		<div
			role="img"
			aria-label="rain's avatar: a headshot and upper body. the avatar is a black and white drawing, and is wearing a suit jacket, shirt, blazer, and tie. has a red melting angel halo. rain is slightly frowning. this image is displayed in several fragments across multiple crt displays."
			class="hero-parent mx-auto mb-8 h-full w-2/3 sm:w-2/5 lg:sticky lg:top-0 lg:col-span-3 lg:col-start-2 lg:mx-auto lg:mb-auto lg:h-screen lg:w-full lg:flex"
		>
			<div class="hero my-auto aspect-square max-h-[40vh] items-center lg:h-3/5">
				<CrtGrid />
			</div>
		</div>
		<div
			class="window col-span-3 col-start-6 mx-auto w-full max-w-prose bg-teal-950 p-6 lg:my-auto lg:flex lg:max-w-none lg:flex-col lg:justify-center"
		>
			<h1 class="fuzzy-text mb-2 font-sans text-4xl font-bold text-white lg:text-7xl">
				Hello, chat.
			</h1>
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
	p {
		@apply font-serif text-gray-200 lg:text-lg;
	}
</style>
