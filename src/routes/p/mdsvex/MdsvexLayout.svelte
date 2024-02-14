<script context="module">
	import code from './code.svelte';
  import p from './p.svelte';
  import a from './a.svelte';
  import h1 from './h1.svelte';
  import h2 from './h2.svelte';
  import h3 from './h3.svelte';
  import h4 from './h4.svelte';
  import h5 from './h5.svelte';
  import h6 from './h6.svelte';
	export { h1, h2, h3, h4, h5, h6, p, a, code };
</script>

<div class="sm:window max-w-2xl sm:mx-auto mx-2 sm:bg-slate-500">
	<article class="max-sm:window mx-auto mb-4 min-h-96 max-w-[100ch] bg-gray-50 sm:p-8 mt-8">
		<slot />
	</article>
</div>
