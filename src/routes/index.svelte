<script>
	import Intro from '$lib/Intro.svelte';
	import Services from '$lib/services.svelte';
	import About from '$lib/about.svelte';
	import Work from '$lib/work.svelte';
</script>

<Intro
	title={'Hi, I am<br/><strong>Vincenzo De Lucia</strong>'}
	subtitle={'front-end dev <br /> UX/UI designer'}
	src={'../static/resources/profile-pic.jpeg'}
	altText={'A picture of Vincenzo De Lucia'}
/>

<Services />

<About />

<Work />
