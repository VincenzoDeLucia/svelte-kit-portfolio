<script>
	import Intro from '$lib/intro.svelte';
	import Services from '$lib/services.svelte';
	import About from '$lib/about.svelte';
	import Work from '$lib/work.svelte';
</script>

<Intro
	id="home"
	titleContent={'Hi, I am<br/><strong>Vincenzo</strong>'}
	subtitleContent={'front-end dev<br />UI designer'}
	src={'../../resources/profile-pic.jpeg'}
	altText={'A picture of Vincenzo De Lucia'}
/>

<Services />

<About />

<Work />
