<section class="intro" id="home">
	<h1 class="section__title section__title--intro">
		Hi, I am <strong>Vincenzo De Lucia</strong>
	</h1>
	<p class="section__subtitle section__subtitle--intro">
		front-end dev <br /> UX/UI designer
	</p>
	<img src="../static/resources/profile-pic.jpeg" alt="Vincenzo De Lucia" class="intro__img" />
</section>

<style>
	.intro {
		position: relative;
	}

	.section__title--intro {
		font-weight: var(--font-weight-reg);
	}

	.section__title--intro strong {
		display: block;
		font-weight: var(--font-weight-bold);
	}

	.section__subtitle--intro {
		background-color: var(--color-accent);
	}

	@media (min-width: 600px) {
		.intro {
			display: grid;
			width: min-content;
			margin: 0 auto;
			grid-column-gap: 1em;
			grid-template-areas:
				'img title'
				'img subtitle'
				'img subtitle';
			grid-template-columns: min-content max-content;
		}

		.intro__img {
			grid-area: img;
			min-width: 250px;
			z-index: 2;
			box-shadow: var(--box-shadow);
		}

		.section__subtitle--intro {
			align-self: start;
			grid-column: -1 / 1;
			grid-row: 2;
			text-align: right;
			position: relative;
			left: -1.5em;
			width: calc(100% + 1.5em);
		}
	}
</style>
