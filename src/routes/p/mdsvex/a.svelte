<script lang="ts">
	export let href: string;
	export let rel: string;
</script>

<a
	{href}
	{rel}
	class="text-teal-900 underline decoration-2 underline-offset-2 visited:text-purple-800 hover:text-teal-700 visited:hover:text-purple-950 dark:text-blue-300 dark:visited:text-purple-400 dark:hover:text-teal-200 dark:visited:hover:text-pink-400 dark:focus:text-teal-200 dark:visited:focus:text-pink-400"
	><slot /></a
>
