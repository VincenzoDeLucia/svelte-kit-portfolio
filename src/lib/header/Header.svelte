<script>
	import Navigation from './Navigation.svelte';
</script>

<header>
	<a class="logo" href="/" alt="Back to the homepage">
		<!-- <img src="" alt="" /> -->
		<p class="logo__placeholder">VDL</p>
	</a>

	<Navigation />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-dark);
		padding: 1em 2em;
		width: 100%;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.logo:focus {
		outline-offset: 0.5em;
	}

	.logo__placeholder {
		color: var(--color-light);
		max-height: 3.75rem;
		font-size: var(--font-size-h2);
		font-weight: var(--font-weight-bold);
		margin: 0;
		line-height: 1;
	}
</style>
