<script>
	export let id, titleContent, subtitleContent, src, altText;
</script>

<section {id}>
	<div class="intro">
		<h1 class="section__title section__title--intro">
			{@html titleContent}
		</h1>
		<p class="section__subtitle section__subtitle--intro">
			{@html subtitleContent}
		</p>
		<img {src} alt={altText} class="intro__img" />
	</div>
</section>

<style>
	.intro {
		position: relative;
	}

	.section__title--intro {
		font-weight: var(--font-weight-reg);
	}

	:global(.section__title--intro strong) {
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
			object-fit: cover;
		}

		.section__subtitle--intro {
			padding-left: calc(50% + 3em);
			padding-right: 1em;
			align-self: start;
			grid-column: -1 / 1;
			grid-row: 2;
			text-align: start;
			position: relative;
			left: -1em;
			width: calc(100% + 2em);
		}
	}

	@media (min-width: 800px) {
		.section__subtitle--intro {
			padding-left: 50%;
		}
	}
</style>
