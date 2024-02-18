<blockquote class="mt-4 border-s-4 border-neutral-300 ps-4 italic dark:border-neutral-500">
	<slot />
</blockquote>

<style lang="postcss">
	blockquote + :global(cite) {
		@apply ms-0.5 font-serif-bitmap text-lg not-italic text-neutral-700;
	}

	blockquote + :global(cite)::before {
		content: '―';
		@apply me-2;
	}

	blockquote + :global(cite) > :global(a) {
		@apply text-neutral-700 underline decoration-2 underline-offset-2 visited:text-purple-800 hover:text-teal-700 visited:hover:text-purple-950;
	}

	/* can't override global or adjacent, both in this el, and in p.svelte and cite, so we do this stupid hack instead :) */
	:global(.dark) blockquote + :global(cite) {
		@apply text-neutral-300;
	}

	blockquote > :global(p) {
		color: theme(colors.neutral.700);
		@apply m-auto;
	}
	:global(.dark) blockquote > :global(p) {
		color: theme(colors.neutral.300) !important;
	}
	:global(.dark) blockquote + :global(cite) > :global(a) {
		@apply text-blue-300 visited:text-purple-400 hover:text-teal-200 visited:hover:text-pink-400 focus:text-teal-200 visited:focus:text-pink-400;
	}
</style>
