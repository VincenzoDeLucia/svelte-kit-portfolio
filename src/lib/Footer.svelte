<footer class="footer">
	<a href="mailto:vincenzo.delucia@icloud.com" class="footer__link">
		<i class="fa-solid fa-envelope" />
		vincenzo.delucia@icloud.com
	</a>
	<ul class="web-presence">
		<li class="web-presence__item">
			<a href="https://www.linkedin.com/in/vincenzo-de-lucia/" class="footer__link" target="_blank">
				<i class="fa-brands fa-linkedin" />
				LinkedIn
			</a>
		</li>
		<li class="web-presence__item">
			<a href="https://github.com/VincenzoDeLucia" class="footer__link" target="_blank"
				><i class="fa-brands fa-github" />
				GitHub
			</a>
		</li>
	</ul>
</footer>

<style>
	.footer {
		background-color: var(--color-dark);
		width: 100%;
		position: sticky;
		bottom: 0;
		left: 0;
		color: var(--color-interactivity);
		text-align: center;
		padding: 0.5em 2em;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 10;
		line-height: 1;
	}

	.footer a {
		color: inherit;
	}

	.footer__link:hover {
		opacity: 0.7;
	}

	.web-presence {
		list-style: none;
		display: flex;
		align-items: center;
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
			position: static;
		}
	}

	@media (max-width: 900px) {
		.footer {
			flex-direction: column;
			line-height: 1.6;
		}
	}
</style>
