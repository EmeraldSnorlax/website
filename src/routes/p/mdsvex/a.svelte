<script lang="ts">
	export let href: string;
</script>

<a {href} class="underline text-blue-700 hover:text-blue-950 visited:text-purple-800 visited:hover:text-purple-950"><slot /></a>