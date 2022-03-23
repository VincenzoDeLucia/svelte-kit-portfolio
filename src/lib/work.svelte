<section class="my-work" id="work">
	<h2 class="section__title">My work</h2>
	<p class="section__subtitle section__subtitle--work">A selection of my works</p>

	<div class="portfolio">
		<a href="/portfolio-item" class="portfolio__item">
			<img src="" alt="" class="portfolio__img" />
			<p class="portfolio-item__description">Here is something I did</p>
		</a>
	</div>
</section>

<style>
	.my-work {
		background-color: var(--color-dark);
		color: var(--color-light);
		text-align: center;
	}

	.section__subtitle.section__subtitle--work {
		color: var(--color-accent);
		font-weight: var(--fw-bold);
		margin-bottom: 1em;
	}

	.portfolio {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	.portfolio__item {
		background: var(--color-accent);
		overflow: hidden;
		text-decoration: none;
	}

	.portfolio__item:focus {
		z-index: 2;
	}

	.portfolio__img {
		transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;
	}

	.portfolio__img:hover,
	.portfolio__item:focus .portfolio__img {
		transform: scale(1.2);
		opacity: 0.75;
	}

	.portfolio-item__description {
		color: var(--color-light);
	}
</style>
