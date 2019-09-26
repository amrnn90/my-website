<template>
  <route-wrapper>
    <div class="aboutme-page">
      <div class="aboutme-intro">
        <img src="https://i.pravatar.cc/150" alt="Amr Noman" class="aboutme-intro__photo" />
        <h1 class="aboutme-intro__heading">Hello, I'm Amr Noman</h1>
        <p
          class="aboutme-intro__body"
        >A computer science graduate who is passionate about fullstack web development and learning new things everyday, I enjoy working on projects using modern technologies.</p>
      </div>

      <div class="aboutme-toolset">
        <div class="aboutme-toolset__content">
          <h3 class="aboutme-toolset__heading">MY USUAL TOOLSET</h3>
          <p class="aboutme-toolset__body">
            I have experience with a wide range of languages and frameworks both on the frontend and the backend, but my favorites right now are:
            <a
              href="https://laravel.com"
              target="_blank"
            >Laravel</a>,
            <a href="https://vuejs.org
    " target="_blank">Vue.js</a> and
            <a href="https://gridsome.org/" target="_blank">Gridsome</a>.
          </p>
        </div>
        <div class="aboutme-toolset__icons">
          <LaravelLogo />
          <VueLogo />
          <GridsomeLogo />
        </div>
      </div>
      <div class="aboutme-contact">
        <h3 class="aboutme-contact__heading">Have any questions?</h3>
        <g-link to="/contact" class="btn btn--secondary">Let's Chat</g-link>
      </div>
    </div>
  </route-wrapper>
</template>

<script>
import LaravelLogo from "~/assets/svgs/LaravelLogo.svg";
import VueLogo from "~/assets/svgs/VueLogo.svg";
import GridsomeLogo from "~/assets/svgs/GridsomeLogo.svg";
import RouteWrapper from "~/layouts/RouteWrapper";

export default {
  components: {
    LaravelLogo,
    VueLogo,
    GridsomeLogo,
    "route-wrapper": RouteWrapper
  },
  metaInfo: {
    title: "About Me"
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/abstract";

.aboutme-page {
  @include py($sp-16, $sp-12);
  @include px($sp-16 - $sp-4, $sp-6);
  max-width: $wsp-4xl;
  margin-left: auto;
  margin-right: auto;
}

.aboutme-intro {
  background: $gray-200;
  position: relative;
  margin-top: $sp-10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: $rounded-default;
  @include pt($sp-32, $sp-24);
  @include pb($sp-24, $sp-16);
  @include px(160px, 40px);
}

.aboutme-intro__photo {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  @include w(150px, 100px);
}

.aboutme-intro__heading {
  font-weight: $fw-black;
  color: $gray-900;
  letter-spacing: $tracking-wide;
  text-transform: uppercase;
  @include fz($fz-3xl, $fz-xl);
}

.aboutme-intro__body {
  font-weight: $fw-medium;
  color: $gray-600;
  margin-top: $sp-4;
  @include fz($fz-lg, $fz-sm);
}

.aboutme-toolset {
  display: flex;
  @include mt($sp-24, $sp-16);

  @include md-down(790px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.aboutme-toolset__content {
  width: 100%;
  @include md-up(790px) {
    width: 60%;
  }
}

.aboutme-toolset__icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 280px;
  margin-top: $sp-8;
  width: 100%;

  @include md-up(790px) {
    margin-top: 0;
    width: 40%;
    max-width: 100%;
  }

  > * {
    @include w(75px, 60px);
  }
}

.aboutme-toolset__heading {
  font-weight: $fw-medium;
  @include fz($fz-2xl, $fz-lg);
}

.aboutme-toolset__body {
  font-weight: $fw-medium;
  color: $gray-600;
  margin-top: $sp-4;
  max-width: 380px;
  @include fz($fz-lg, $fz-base);

  @include md-down(790px) {
    margin-left: auto;
    margin-right: auto;
  }
}

.aboutme-contact {
  background: $gray-800;
  text-align: center;
  padding-right: $sp-4;
  padding-left: $sp-4;
  @include mt($sp-24, $sp-16);
  @include py($sp-24, $sp-16);
}

.aboutme-contact__heading {
  color: $gray-100;
  font-weight: $fw-normal;
  @include fz($fz-3xl, $fz-xl);
  margin-bottom: $sp-6;
}

</style>