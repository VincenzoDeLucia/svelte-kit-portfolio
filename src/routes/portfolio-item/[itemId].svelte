<script>
	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import Intro from '../../lib/intro.svelte';

	onMount(() => {
		console.log('boo!');
	});
</script>

<div class="wrapper">
	<Intro
		id="portfolio-item"
		titleContent={'<strong>Example project</strong>'}
		subtitleContent={"I swear I'll get to it eventually"}
		src={'../../resources/portfolio-project.jpg'}
		altText={'A placeholder photo'}
	/>
</div>
