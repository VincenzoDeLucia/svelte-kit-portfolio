<script>
	let navOpen = false;
	const onNavToggle = () => {
		navOpen = !navOpen;
	};
</script>

<button
	class="nav-toggle"
	class:nav-toggle--open={navOpen}
	aria-label="toggle navigation"
	on:click={onNavToggle}
>
	<span class="hamburger" />
</button>

<nav class="nav" class:nav--open={navOpen}>
	<ul class="nav__list">
		<li class="nav__item" on:click={onNavToggle}>
			<a href="/" class="nav__link">Home</a>
		</li>
		<li class="nav__item" on:click={onNavToggle}>
			<a href="/services" class="nav__link">My Services</a>
		</li>
		<li class="nav__item" on:click={onNavToggle}>
			<a href="/about" class="nav__link">About me</a>
		</li>
		<li class="nav__item" on:click={onNavToggle}>
			<a href="/work" class="nav__link">My Work</a>
		</li>
	</ul>
</nav>

<style>
	.nav-toggle {
		padding: 0.25em;
		background: transparent;
		border: 0;
		cursor: pointer;
		position: absolute;
		right: 1em;
		top: 1em;
		z-index: 101;
	}

	.nav-toggle.nav-toggle--open {
		position: fixed;
	}

	.hamburger {
		display: block;
		position: relative;
	}

	.hamburger,
	.hamburger:before,
	.hamburger:after {
		background-color: var(--color-accent);
		width: 2em;
		height: 3px;
		border-radius: 1em;
		transition: transform 250ms ease-in-out;
	}

	.hamburger:before,
	.hamburger:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
	}

	.hamburger:before {
		top: 6px;
	}

	.hamburger:after {
		bottom: 6px;
	}

	.nav-toggle--open .hamburger {
		transform: rotate(0.625turn);
	}

	.nav-toggle--open .hamburger:before {
		transform: rotate(90deg) translateX(-6px);
	}

	.nav-toggle--open .hamburger:after {
		opacity: 0;
	}

	.nav__list {
		list-style: none;
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		margin: 0;
		padding: 0;

		position: fixed;
		background-color: var(--color-dark);
		color: var(--color-light);
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 100;

		transform: translateX(100%);
		transition: transform 250ms ease-in-out;
	}

	.nav__link {
		color: inherit;
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-h3);
		text-decoration: none;
	}

	.nav__link:hover {
		color: var(--color-accent);
	}

	.nav--open .nav__list {
		transform: translateX(0%);
	}
</style>
