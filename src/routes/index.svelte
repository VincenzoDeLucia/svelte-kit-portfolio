<script>
	import Introduction from '$lib/Introduction.svelte';
	import Experience from '$lib/Experience.svelte';
	import AboutMe from '$lib/AboutMe.svelte';
	import WorkSection from '$lib/WorkSection.svelte';
</script>

<Introduction
	id="home"
	titleContent={'Hi, I am<br/><strong>Vincenzo</strong>'}
	subtitleContent={'front-end dev<br />UX/UI designer'}
	src={'../../resources/profile-pic.jpeg'}
	altText={'A picture of Vincenzo De Lucia'}
/>

<Experience />

<AboutMe />

<WorkSection />
