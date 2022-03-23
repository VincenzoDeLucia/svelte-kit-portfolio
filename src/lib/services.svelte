<section class="my-services" id="services">
  <h2 class="section__title section__title--services">What I do</h2>
  <div class="my-services__descriptions">
    <div class="service">
      <h3>Design</h3>
      <p>
        No… but I'd like to be asked! Not tricks, Michael, illusions. Michael!
        He'll want to use your yacht, and I don't want this thing smelling like
        fish. Marry me. He'll want to use your yacht, and I don't want this
        thing smelling like fish. What's Spanish for "I know you speak English?"
        That's why you always leave a note! We just call it a sausage.
      </p>
    </div>

    <div class="service">
      <h3>Development</h3>
      <p>
        The way I see it, every life is a pile of good things and bad
        things.…hey.…the good things don't always soften the bad things; but
        vice-versa the bad things don't necessarily spoil the good things and
        make them unimportant. No… It's a thing; it's like a plan, but with more
        greatness. You know how I sometimes have really brilliant ideas?
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
  }

  .section__title--services {
    color: var(--color-accent);
    position: relative;
  }

  .section__title--services::after {
    content: "";
    display: block;
    width: 2em;
    height: 1px;
    margin: 0.5em auto 1em;
    background-color: var(--color-light);
    opacity: 0.25;
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
