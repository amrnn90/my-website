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
        <div class="project__description">
          <h3 class="project__description-title">Chatbed</h3>
          <p class="project__description-body">Quickly embed a chat window in your website.</p>
        </div>
      </div>
      <div class="project">
        <div class="project__description project__description--alternate">
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
  components: { Squiggles }
};
</script>

<style scoped lang="scss">
@import '../../styles/abstract';

.projects-page {
  padding: $sp-20;
  padding-top: $sp-24;
}

.projects-page__title {
  font-family: $serif;
  font-weight: $fw-medium;
  font-size: $fz-4xl;
  color: $gray-800;
  text-align: center;

  .squiggles {
    display: inline-block;
  }
}

.projects {
  max-width: $wsp-2xl;
  margin: $sp-16 auto;
  display: flex;
  justify-content: space-between;
}

.project {
  position: relative;
  background: $gray-400;
  width: $sp-64;
  height: $sp-64;

}

.project__description {
  position: absolute;
  bottom: 100%;
  left: -90px;
  padding: 21px;
  right: 30px;
  transform: translate3d(0, 50%, 0);
  background: white;

  &--alternate {
    top: 100%;
    transform: translate3d(0, -50%, 0);
    left: 30px;
    right: -90px;
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