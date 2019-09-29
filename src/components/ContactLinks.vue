<template>
  <div>
    <h3 class="contact-links__heading">Also find me here</h3>
    <div class="contact-links">
      <a href="https://github.com/amrnn90" class="contact-links__link" target="_blank">
        <github />
      </a>
      <a href="https://twitter.com/amrnn90" class="contact-links__link" target="_blank">
        <twitter />
      </a>
      <a
        href="https://stackoverflow.com/users/4765497/amr-noman"
        class="contact-links__link"
        target="_blank"
      >
        <stackoverflow />
      </a>
    </div>
  </div>
</template>

<script>
import Github from "~/assets/svgs/github.svg";
import Twitter from "~/assets/svgs/twitter.svg";
import Stackoverflow from "~/assets/svgs/stackoverflow.svg";

export default {
  components: {
    Github,
    Stackoverflow,
    Twitter
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/abstract";

.contact-links__heading {
  font-weight: $fw-bold;
  color: $gray-600;
  letter-spacing: $tracking-wide;
  text-transform: uppercase;
  font-size: $fz-sm;

  @include md-down(780px) {
    @include mt($sp-16, $sp-8, 780px);
  }
}

.contact-links {
  display: flex;
  align-items: center;
}

.contact-links__link {
  margin-top: $sp-4;
  &:not(:first-child) {
    margin-left: $sp-4;
  }
}
</style>