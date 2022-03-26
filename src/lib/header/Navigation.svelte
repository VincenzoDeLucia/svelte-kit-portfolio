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
			<a href="/#home" class="nav__link">Home</a>
		</li>
		<li class="nav__item" on:click={onNavToggle}>
			<a href="/#services" class="nav__link">My Services</a>
		</li>
		<li class="nav__item" on:click={onNavToggle}>
			<a href="/#about" class="nav__link">About me</a>
		</li>
		<li class="nav__item" on:click={onNavToggle}>
			<a href="/#work" class="nav__link">My Work</a>
		</li>
	</ul>
</nav>

<style>
	.nav__list {
		list-style: none;
		background-color: var(--color-dark);
		color: var(--color-light);
		margin: 0;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.nav__link {
		color: inherit;
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-h3);
		text-decoration: none;
	}

	.nav__item {
		white-space: nowrap;
	}

	.nav-toggle {
		display: none;
	}

	@media (max-width: 800px) {
		.nav-toggle {
			display: block;
			padding: 0.25em;
			background: transparent;
			border: 0;
			cursor: pointer;
			z-index: 101;
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

		.nav {
			position: fixed;
			z-index: 100;

			top: 0;
			right: 0;
			bottom: 0;
			left: 0;

			transform: translateX(100%);
			transition: transform 250ms ease-in-out;
		}

		.nav__list {
			flex-direction: column;
			justify-content: space-evenly;
			padding: 0;
			height: 100%;
			width: 100%;
		}

		.nav__link:hover {
			color: var(--color-accent);
		}

		.nav.nav--open {
			transform: translateX(0%);
			transition: transform 250ms ease-in-out;
		}
	}
</style>
