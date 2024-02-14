<script context="module" lang="ts">
  import code from './code.svelte'
  export { code }
</script>

<div class="sm:window sm:bg-slate-400 max-w-2xl sm:mx-auto mt-16">
  <article class="max-sm:window bg-gray-50 max-w-[100ch] min-h-96 mx-auto sm:p-8 mt-10 mb-4">
    <slot/>
  </article>
</div>