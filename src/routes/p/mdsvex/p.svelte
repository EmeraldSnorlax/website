<p
	class="my-6 font-serif leading-relaxed text-neutral-700 dark:text-neutral-200 sm:my-0.5 sm:indent-12"
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
	:global(ol) + p {
		@apply mt-2 indent-0;
	}
</style>
