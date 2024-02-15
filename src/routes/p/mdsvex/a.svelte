<script lang="ts">
	export let href: string;
	export let rel: string;
</script>

<a
	{href}
	{rel}
	class="text-blue-700 underline visited:text-purple-800 hover:text-blue-950 visited:hover:text-purple-950 dark:text-blue-300 dark:visited:text-purple-400 dark:hover:text-teal-200 dark:visited:hover:text-pink-400 dark:focus:text-teal-200 dark:visited:focus:text-pink-400"
	><slot /></a
>
