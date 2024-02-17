<p
	class="my-6 font-serif leading-relaxed text-neutral-800 dark:text-neutral-200 sm:my-0.5 sm:indent-12"
>
	<slot />
</p>

<style lang="postcss">
	:global(h1) + p,
	:global(h2) + p,
	:global(h3) + p,
	:global(h4) + p,
	:global(h5) + p,
	:global(h6) + p,
	:global(ul) + p,
	:global(ol) + p,
	:global(blockquote) > p,
	:global(blockquote) + p,
	:global(blockquote) + :global(cite) + p {
		@apply mt-2 indent-0;
	}
	:global(blockquote) > p > :global(em) {
		@apply tracking-wider;
	}
	:global(blockquote) > p > :global(strong) {
		@apply font-bold;
	}
	:global(blockquote) > p > :global(strong) > :global(em) {
		@apply tracking-wider;
	}
</style>
