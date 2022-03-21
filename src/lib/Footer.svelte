<footer class="footer">
  <a href="mailto:vincenzo.delucia@icloud.com" class="footer__link"
    >vincenzo.delucia@icloud.com</a
  >
  <ul class="web-presence">
    <li class="web-presence__item">
      <a
        href="https://www.linkedin.com/in/vincenzo-de-lucia/"
        class="web-presence__link"
      >
        <i class="fa-brands fa-linkedin" />
        LinkedIn
      </a>
    </li>
    <li class="web-presence__item">
      <a href="https://github.com/VincenzoDeLucia" class="web-presence__link"
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
    padding: 2.5em 0;
    font-size: var(--font-size-h3);
  }

  .footer a {
    color: inherit;
    text-decoration: none;
  }

  .footer__link {
    font-weight: var(--font-weight-bold);
  }

  .footer__link:hover,
  .web-presence__link:hover {
    opacity: 0.7;
  }

  .footer__link:hover {
    text-decoration: underline;
  }

  .web-presence {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 2em 0;
    padding: 0;
  }

  .web-presence__item {
    margin: 0 0.5em;
  }

  .web-presence__link {
    padding: 0.5em;
  }
</style>
