<script>
	import Navigation from './Navigation.svelte';
</script>

<header>
	<div class="logo">
		<!-- <img src="" alt="" /> -->
		<p class="logo__placeholder">VDL</p>
	</div>

	<Navigation />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-dark);
		padding: 1em;
		width: 100%;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.logo__placeholder {
		color: var(--color-light);
		max-height: 3.75rem;
		font-size: var(--font-size-h2);
		font-weight: var(--font-weight-bold);
		margin: 0;
	}
</style>
