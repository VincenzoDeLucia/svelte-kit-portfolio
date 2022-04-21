<script>
	import '../app.css';
	import '../normalize.css';
	import { onMount } from 'svelte';
	import { currentSection } from '../currentSectionStore';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	let main;

	let options = {
		root: main,
		rootMargin: '0%',
		threshold: 0.8
	};

	const handleScroll = (sections) => {
		sections.forEach((section) => {
			if (section.isIntersecting) {
				currentSection.setCurrentSection(section.target.id);
			}
		});
	};

	onMount(() => {
		let scrollObserver = new IntersectionObserver(handleScroll, options);

		main.querySelectorAll('section').forEach((section) => {
			scrollObserver.observe(section);
		});
	});
</script>

<Header />

<main bind:this={main}>
	<slot />
</main>

<Footer />
