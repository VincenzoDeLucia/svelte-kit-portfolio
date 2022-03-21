<script>
	import Navigation from './Navigation.svelte';
</script>

<header>
	<div class="logo">
		<img src="" alt="" />
		<h2>LOGO</h2>
	</div>

	<Navigation />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 1em;
	}

	.logo {
		max-width: 150px;
	}
</style>
