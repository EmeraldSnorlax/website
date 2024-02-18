<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<img {src} {alt} class="w-full h-auto my-4 border border-dashed border-slate-500" loading="lazy" />