<template>
  <div class="projects-page">
    <h1 class="projects-page__title">
      Some of the things I do
      <div>
        <Squiggles class="squiggles" />
      </div>
    </h1>

    <div class="projects">
      <div class="project">
        <div class="project__image"></div>

        <div class="project__description">
          <h3 class="project__description-title">Chatbed</h3>
          <p class="project__description-body">Quickly embed a chat window in your website.</p>
        </div>
      </div>
      <div class="project project--alternate">
        <div class="project__image"></div>

        <div class="project__description">
          <h3 class="project__description-title">Chatbed</h3>
          <p class="project__description-body">Quickly embed a chat window in your website.</p>
        </div>
      </div>
      <div class="project">
        <div class="project__image"></div>

        <div class="project__description">
          <h3 class="project__description-title">Chatbed</h3>
          <p class="project__description-body">Quickly embed a chat window in your website.</p>
        </div>
      </div>
      <div class="project project--alternate">
        <div class="project__image"></div>

        <div class="project__description">
          <h3 class="project__description-title">Chatbed</h3>
          <p class="project__description-body">Quickly embed a chat window in your website.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Squiggles from "~/assets/svgs/Squiggles.svg";

export default {
  components: { Squiggles },
  metaInfo: {
    title: "My Work"
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/abstract";

.projects-page {
  @include py($sp-16, $sp-12);
  // @include px($sp-24, $sp-6);
  @include px($sp-16 - $sp-4, $sp-6);
}

.projects-page__title {
  font-family: $sans;
  font-weight: $fw-black;
  letter-spacing: $tracking-wide;
  font-size: $fz-4xl;
  color: $gray-800;
  text-align: center;
  @include fz($fz-4xl, $fz-3xl);

  .squiggles {
    display: inline-block;
  }
}

.projects {
  max-width: $wsp-2xl;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  @include my($sp-24, $sp-16);

  @include md-down(790px) {
    display: block;
  }
}

.project {
  position: relative;
  background: $gray-400;
  width: $sp-64;
  // height: $sp-64;
  margin-bottom: $sp-20;

  &--alternate {
    margin-left: $sp-12;
    @include ml($sp-32, $sp-12, 1200px, $screen-md);
    .project__description {
      left: 30px;
      right: -90px;
    }
  }

  .project__image {
    padding-top: 100%;
  }

  @include md-down(790px) {
    margin-left: auto;
    margin-right: auto;
    width: $wsp-xs;
    max-width: 100%;
  }
}

.project__description {
  position: absolute;
  bottom: 100%;
  left: -90px;
  right: 30px;
  transform: translate3d(0, 50%, 0);
  background: white;
  @include p($sp-6, $sp-4);

  @include md-down(790px) {
    left: 10px !important;
    right: 10px !important;
    // padding:
  }
}

.project__description-title {
  font-family: $serif;
  color: $gray-900;
  text-transform: uppercase;
  letter-spacing: $tracking-wider;
}

.project__description-body {
  margin-top: $sp-2;
  font-size: $fz-sm;
  color: $gray-600;
}
</style>