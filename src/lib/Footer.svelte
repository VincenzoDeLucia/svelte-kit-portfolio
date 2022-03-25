<footer class="footer">
	<a href="mailto:vincenzo.delucia@icloud.com" class="footer__link">
		<i class="fa-solid fa-envelope" />
		vincenzo.delucia@icloud.com
	</a>
	<ul class="web-presence">
		<li class="web-presence__item">
			<a href="https://www.linkedin.com/in/vincenzo-de-lucia/" class="footer__link">
				<i class="fa-brands fa-linkedin" />
				LinkedIn
			</a>
		</li>
		<li class="web-presence__item">
			<a href="https://github.com/VincenzoDeLucia" class="footer__link"
				><i class="fa-brands fa-github" />
				GitHub
			</a>
		</li>
	</ul>
</footer>

<style>
	.footer {
		background-color: #111;
		color: var(--color-accent);
		text-align: center;
		padding: 0.5em 1em;
		font-size: var(--font-size-h3);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.footer a {
		color: inherit;
		text-decoration: none;
	}

	.footer__link:hover {
		opacity: 0.7;
	}

	.web-presence {
		list-style: none;
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}

	.footer__link {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	@media (max-width: 800px) {
		.footer {
			flex-direction: column;
		}
	}
</style>
