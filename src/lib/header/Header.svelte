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
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-dark);
		width: 100%;
	}

	.logo h2 {
		color: var(--color-light);
	}
</style>
