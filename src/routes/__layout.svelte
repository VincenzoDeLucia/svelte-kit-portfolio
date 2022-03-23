<script>
	import '../app.css';
	import '../normalize.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
</style>
