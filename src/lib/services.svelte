<section class="my-services" id="services">
	<h2 class="section__title section__title--services">What I do</h2>
	<div class="my-services__descriptions">
		<div class="service">
			<h3>Development</h3>
			<p>
				I use <strong>Html</strong>, <strong>CSS</strong> and <strong>Javascript</strong> on a daily
				basis for my work as well as my personal projects. I have work experience with
				<strong>React</strong>
				and <strong>Twig</strong>, whereas this website is built with
				<strong>SvelteKit</strong>. My approach to development is driven by my innate curiosity and
				the desire to continuously acquire new skills through experimentation.
			</p>
		</div>

		<div class="service">
			<h3>Design</h3>
			<p>
				<strong>UI Design</strong> is something I am deeply drawn to and my tool of choice is
				<strong>Figma</strong>. I work on maintaining and expanding <strong>design systems</strong>
				and <strong>component libraries</strong>, as well as crafting
				<strong>design languages</strong> to help bring products to life. I aim to create resilient designs
				that offer a solid core experience with custom, broswer-specific or device-specific enhancements.
			</p>
		</div>
	</div>

	<a href="#work" class="btn">My work</a>
</section>

<style>
	.my-services {
		background-color: var(--color-dark);
		color: var(--color-light);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url('../../static/resources/background-image.jpg');
		background-size: cover;
		background-position: center;
		background-blend-mode: multiply;
	}

	.section__title--services {
		color: var(--color-accent);
		position: relative;
	}

	.section__title--services::after {
		content: '';
		display: block;
		width: 2em;
		height: 1px;
		margin: 0.5em auto 1em;
		background-color: var(--color-accent);
	}

	.my-services__descriptions {
		margin-bottom: 4em;
		display: grid;
		gap: 2em;
		max-width: 1000px;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 50%;
	}

	@media (max-width: 800px) {
		.my-services__descriptions {
			grid-template-columns: 1fr;
		}
	}
</style>
