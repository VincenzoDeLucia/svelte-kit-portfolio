<section class="my-work" id="work">
	<h2 class="section__title">My work</h2>
	<p class="section__subtitle section__subtitle--work">A selection of my projects</p>

	<div class="portfolio">
		{#each [1, 2, 3, 4, 5, 6] as itemId}
			<a href="/portfolio-item/{itemId}" class="portfolio__item">
				<img
					loading="lazy"
					src="../../resources/portfolio-project.jpg"
					alt=""
					class="portfolio__img"
				/>
				<p class="portfolio-item__description">Here is something I did</p>
			</a>
		{/each}
	</div>
</section>

<style>
	.my-work {
		text-align: center;
	}

	.section__subtitle.section__subtitle--work {
		color: var(--color-accent);
		margin-bottom: 1em;
	}

	.portfolio {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2em;
		max-width: 1000px;
		width: calc(100% - 4em);
		justify-content: center;
	}

	.portfolio__item {
		background: var(--color-interactivity);
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
		color: var(--color-dark);
	}
</style>
