<script>
	let navOpen = false;
	let selected = 'home';
	const onNavToggle = () => {
		navOpen = !navOpen;
	};

	const onNavItemClick = (item) => {
		selected = item;
		onNavToggle();
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
		<li
			class="nav__item"
			class:nav__item--underline={selected === 'home'}
			on:click={() => {
				onNavItemClick('home');
			}}
		>
			<a href="/#home" class="nav__link">Home</a>
		</li>
		<li
			class="nav__item"
			class:nav__item--underline={selected === 'services'}
			on:click={() => {
				onNavItemClick('services');
			}}
		>
			<a href="/#services" class="nav__link">My Services</a>
		</li>
		<li
			class="nav__item"
			class:nav__item--underline={selected === 'about'}
			on:click={() => {
				onNavItemClick('about');
			}}
		>
			<a href="/#about" class="nav__link">About me</a>
		</li>
		<li
			class="nav__item"
			class:nav__item--underline={selected === 'work'}
			on:click={() => {
				onNavItemClick('work');
			}}
		>
			<a href="/#work" class="nav__link">My Work</a>
		</li>
		<li class="nav__item nav__item--web-presence">
			<a
				href="mailto:vincenzo.delucia@icloud.com"
				class="footer__link"
				alt="Vincenzo De Lucia's email"
			>
				<i class="fa-solid fa-envelope" />
			</a>
			<a
				href="https://www.linkedin.com/in/vincenzo-de-lucia/"
				class="footer__link"
				alt="LinkedIn profile"
			>
				<i class="fa-brands fa-linkedin" />
			</a>
			<a href="https://github.com/VincenzoDeLucia" class="footer__link" alt="GitHub profile"
				><i class="fa-brands fa-github" />
			</a>
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
		gap: 2rem;
	}

	.nav__link {
		color: inherit;
		font-weight: var(--font-weight-reg);
		font-size: var(--font-size-h3);
		color: var(--color-interactivity);
	}

	.nav__link:hover {
		opacity: 0.75;
	}

	.nav__item {
		white-space: nowrap;
		position: relative;
	}

	.nav__item:after {
		content: '';
		background-color: var(--color-interactivity);
		width: 100%;
		height: 2px;
		transform: scaleX(0);
		position: absolute;
		bottom: -2px; /* matching the offset on :focus */
		left: 0;
		transition: transform 0.3s ease-in;
	}

	.nav__item.nav__item--underline:after {
		transform: scaleX(1);
		transition: transform 0.3s ease-out;
	}

	.nav-toggle {
		display: none;
	}

	.nav__item--web-presence {
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
			background-color: var(--color-interactivity);
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

		.nav.nav--open {
			transform: translateX(0%);
			transition: transform 250ms ease-in-out;
		}

		.nav__item--web-presence {
			font-size: var(--font-size-h2);
			display: flex;
			align-items: center;
			gap: 2em;
		}
	}
</style>
