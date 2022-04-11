<section id="about">
	<div class="about-me">
		<h2 class="section__title section__title--about">Who I am</h2>
		<p class="section__subtitle section__subtitle--about">
			web developer<br />designer<br />a11y enthusiast
		</p>

		<div class="about-me__body">
			<p>
				I have always been fascinated by the way people interact with any kind technology. I try to
				be mindful of things we may give for granted even though they are the result of exceptional
				thought and effort. This is what sparked my interest in the <strong>Web</strong>, a space in
				which I found personal <strong>growth</strong>, countless <strong>opportunities</strong> and
				even life-long <strong>friendships</strong>.
			</p>
			<p>
				The Web shapes societies in ways that are a direct reflection of how <strong
					>inclusive</strong
				>
				and <strong>democratic</strong> the platform itself is. I believe in its potential to be a
				great, unifying force and one of the greatest catalysts for human progress. This is why I
				like curating experiences and crafting interfaces that are <strong>accessible</strong>,
				<strong>functional</strong>
				and <strong>performant</strong>.
			</p>
		</div>

		<img
			loading="lazy"
			src="../../resources/sparkler.jpg"
			alt="A hand juts out of a body of water, holding a lit sparkler"
			class="about-me__img"
		/>
	</div>
</section>

<style>
	.about-me {
		max-width: 1000px;
		margin: 0 auto;
	}

	.section__subtitle--about {
		background-color: var(--color-accent);
	}

	.about-me__img {
		box-shadow: var(--box-shadow);
		height: 100%;
		object-fit: cover;
	}

	.about-me__body {
		padding: 0 1em;
	}

	@media (min-width: 600px) {
		.about-me {
			display: grid;
			grid-template-columns: 1fr 200px;
			grid-template-areas:
				'title img'
				'subtitle img'
				'text img';
			grid-column-gap: 2em;
		}

		.section__title--about {
			grid-area: title;
			padding-left: 0;
		}

		.section__subtitle--about {
			grid-column: 1 / -1;
			grid-row: 2;
			position: relative;
			left: -1em;
			width: calc(100% + 2em);
			padding-left: 1em;
			padding-right: calc(200px + 4em);
		}

		.about-me__img {
			grid-row: 1/-1;
			grid-column: 2;
			position: relative;
			z-index: 2;
			grid-area: img;
		}

		.about-me__body {
			padding: 0;
		}
	}
</style>
