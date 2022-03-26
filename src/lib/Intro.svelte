<script>
	export let id, title, subtitle, src, altText;
</script>

<section {id}>
	<div class="intro">
		<h1 class="section__title section__title--intro">
			{@html title}
		</h1>
		<p class="section__subtitle section__subtitle--intro">
			{@html subtitle}
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
		}

		.section__subtitle--intro {
			padding-left: 50%;
			align-self: start;
			grid-column: -1 / 1;
			grid-row: 2;
			text-align: end;
			position: relative;
			left: -1.5em;
			width: calc(100% + 1.5em);
		}
	}
</style>
