<blockquote class="mt-4 border-s-4 border-neutral-300 ps-6 italic dark:border-neutral-500">
	<slot />
</blockquote>

<style lang="postcss">
	blockquote + :global(cite) {
		@apply font-serif-bitmap text-neutral-700 text-lg ms-0.5 not-italic;
	}

	blockquote + :global(cite)::before {
		content: '―';
		@apply me-2;
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
</style>
