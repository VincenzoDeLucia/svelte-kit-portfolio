<section class="about-me" id="about">
	<h2 class="section__title section__title--about">Who I am</h2>
	<p class="section__subtitle section__subtitle--about">
		Designer<br />web developer<br />a11y
	</p>

	<div class="about-me__body">
		<p>
			What's Spanish for "I know you speak English?" It's called 'taking advantage.' It's what gets
			you ahead in life. No, I did not kill Kitty. However, I am going to oblige and answer the nice
			officer's questions because I am an honest man with no secrets to hide.
		</p>
		<p>
			Marry me. But I bought a yearbook ad from you, doesn't that mean anything anymore? Did you
			enjoy your meal, Mom? You drank it fast enough. As you may or may not know, Lindsay and I have
			hit a bit of a rough patch.
		</p>
	</div>

	<img src="../../resources/profile-pic.jpeg" alt="" class="about-me__img" />
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
		}

		.about-me__img {
			grid-area: img;
		}
	}
</style>
