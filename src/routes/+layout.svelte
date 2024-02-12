<script>
	import '../app.pcss';
	import '@emeraldsnorlax/pp-fonts/Mondwest';
	import '@emeraldsnorlax/pp-fonts/NeueBit';
	import mondwestUrl from '@emeraldsnorlax/pp-fonts/Mondwest/Regular.woff2?url';
	import mondwestBoldUrl from '@emeraldsnorlax/pp-fonts/Mondwest/Bold.woff2?url';
	import neueBitUrl from '@emeraldsnorlax/pp-fonts/NeueBit/Regular.woff2?url';
	import neueBitBoldUrl from '@emeraldsnorlax/pp-fonts/NeueBit/Bold.woff2?url';
</script>

<svelte:head>
	<link rel="preload" href={mondwestUrl} as="font" type="font/woff2" crossorigin="anonymous"/>
	<link rel="preload" href={neueBitBoldUrl} as="font" type="font/woff2" crossorigin="anonymous"/>
</svelte:head>
<slot />
