<template>
  <footer>
    <div class="container">
      <div class="footer-links">
        <a
          class="footer-link"
          title="Check out my Github"
          href="https://github.com/mikesglitch"
          target="_blank"
        >
          <img
            class="footer-link__icon"
            src="~/assets/images/icons/github-brands.svg"
            alt="Github"
          />
          GitHub
        </a>
        <a
          class="footer-link"
          title="Check out my LinkedIn"
          href="https://www.linkedin.com/in/mjclark91/"
          target="_blank"
        >
          <img
            class="footer-link__icon"
            src="~/assets/images/icons/linkedin-brands.svg"
            alt="Linkedin"
          />Linkedin
        </a>

        <NuxtLink class="footer-link" title="Contact me" to="/contact">
          <img
            class="footer-link__icon"
            src="~/assets/images/icons/envelope-regular.svg"
            alt="Contact me"
          />Contact me
        </NuxtLink>
      </div>
      <div class="copyright">
        Copyright © 2021 – present. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use 'assets/css/screen-breakpoints';

footer {
  margin-top: 1rem;
  background-color: white;
  font-weight: bold;
  padding: 3rem;
  box-shadow: 0 -10px 15px -3px rgba(0, 0, 0, 0.1),
    0 -4px 6px -2px rgba(0, 0, 0, 0.05); // multiple shadows for a bit more depth

  .footer-links {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @include screen-breakpoints.tablet {
      flex-direction: row;
    }

    .footer-link {
      display: flex;
      margin: .5rem 0;
      align-items: center;

      @include screen-breakpoints.tablet {
        margin: 0 1rem;
      }

      &__icon {
        margin-right: 0.5rem;
        width: 25px;
        height: 25px;
      }
    }
  }

  .copyright {
    margin-top: 1rem;
    text-align: center;
    font-style: italic;
  }
}
</style>
