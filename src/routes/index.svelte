<script>
	import Intro from '$lib/Intro.svelte';
	import Services from '$lib/Services.svelte';
	import About from '$lib/About.svelte';
	import Work from '$lib/Work.svelte';
</script>

<Intro
	id="home"
	titleContent={'Hi, I am<br/><strong>Vincenzo</strong>'}
	subtitleContent={'front-end dev<br />UX/UI designer'}
	src={'../../resources/profile-pic.jpeg'}
	altText={'A picture of Vincenzo De Lucia'}
/>

<Services />

<About />

<Work />
