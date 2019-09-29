<template>
  <div
    class="layout"
    :class="{'open-nav': navOpened, 'close-nav': (navOpened !== null &&!navOpened), 'is-home': isHome}"
  >
    <div class="layout__fixed">
      <header class="layout__header">
        <g-link to="/">
          <Logo class="logo" @click="closeNavIfMobile" />
        </g-link>

        <div class="relative">
          <Hamburger class="nav-toggle" @click.stop.prevent="toggleNav" role="button" />
          <div class="layout__menu">
            <nav>
              <g-link to="/projects" class="layout__menu-item" @click="closeNavIfMobile">My Work</g-link>
              <g-link to="/about" class="layout__menu-item" @click="closeNavIfMobile">About Me</g-link>
              <g-link to="/contact" class="layout__menu-item" @click="closeNavIfMobile">Contact</g-link>
            </nav>
          </div>
        </div>
      </header>
    </div>

    <div class="layout__content-wrapper layout__content-wrapper--fixed">
      <div class="layout__fixed-content">
        <h1 class="layout__heading">Amr Noman</h1>
        <h2 class="layout__subheading">&lt;/ Fullstack Web Developer&nbsp;&gt;</h2>
        <div class="layout__actions">
          <g-link to="/projects" class="btn btn--primary">See My Work</g-link>
          <g-link to="/contact" class="btn btn--secondary">Contact Me</g-link>
        </div>
      </div>
    </div>

    <transition name="slide">
      <div class="layout__content-wrapper" v-if="!isHome">
        <main class="layout__content">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </main>
      </div>
    </transition>
  </div>
</template>

<script>
import ResizeObserver from "@juggle/resize-observer";
import Logo from "~/assets/svgs/Logo.svg";
import Hamburger from "~/assets/svgs/Hamburger.svg";

export default {
  components: {
    Logo,
    Hamburger
  },
  data() {
    return {
      navOpened: null
    };
  },
  methods: {
    toggleNav() {
      this.navOpened =
        this.navOpened === null
          ? this.isMobile()
            ? true
            : false
          : !this.navOpened;
      console.log(this.navOpened);
    },
    closeNav() {
      this.navOpened = false;
    },
    closeNavIfMobile() {
      if (this.isMobile()) {
        this.closeNav();
      }
    },
    isMobile() {
      return document.body.clientWidth < 940;
    }
  },
  computed: {
    isHome() {
      return this.$route.path == "/";
    }
  },
  watch: {
    "$route.path": {
      handler() {
        this.closeNavIfMobile();
      }
    }
  },
  mounted() {
    this.ro = new ResizeObserver(this.closeNavIfMobile);
    this.ro.observe(document.body);

    /*
     * Needed to prevent scroll issues in route transitions on popstate:
     * https://dev.to/uwutrinket/fix-scroll-jump---vue-router-45ja
     */
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  },
  destroyed() {
    this.ro.disconnect();
  },
  metaInfo() {
    return {
      title: null,
      titleTemplate: titleChunk => {
        const siteName = this.$static.metaData.siteName;
        // If undefined or blank then we don't need the hyphen
        return titleChunk ? `${titleChunk} - ${siteName}` : siteName;
      }
    };
  }
};
</script>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<style lang="scss">
@import "../styles/abstract";

html {
  // overflow-y: scroll;
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}

body {
  &::before {
    background: linear-gradient(rgba($gray-900, 0.82), rgba($gray-900, 0.82)),
      url("../assets/images/Background.jpg");
    background-position: center;
    background-size: cover;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: "";
    animation: zoomin 20s ease-in-out infinite alternate;
  }
}

.layout {
  font-size: $fz-base;
  color: $gray-800;
  font-family: $sans;
  -webkit-font-smoothing: antialiased;
}

.layout__fixed {
  position: fixed;
  left: 0;
  right: 0;
  // bottom: 0;
  top: 0;
  z-index: 100000;
}

.layout__header {
  position: absolute;
  z-index: 1000;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include px($sp-16, $sp-6);
  @include h($sp-24, $sp-16);

  margin-right: calc(-1 * (100vw - 100%));

}

.logo,
.nav-toggle {
  @include w(3.2rem, $sp-10);
  z-index: 1000;
  position: relative;
  cursor: pointer;
}

.logo > .letter-a,
.nav-toggle > * {
  transition: 0.3s all ease-in-out;
  fill: $gray-800;
}

.layout__menu,
.layout__content-wrapper {
  transition: padding 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.layout__menu {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translate3d(0, 0, 0);
  left: 100%;
  font-size: $fz-xl;
  font-weight: $fw-black;
  color: $gray-300;
  letter-spacing: $tracking-wide;
  width: 100%;
  height: 100vh;

  @include md-up($screen-md) {
    @include pr($sp-16, $sp-8, $screen-xl, $screen-md);
    @include fz($fz-base, $fz-base, 1200px, $screen-md);
    justify-content: flex-end;
    text-align: right;
    width: 17vw;
  }
}

.layout__menu-item {
  display: block;
  color: $gray-400;
  text-transform: uppercase;
  margin: $sp-12 0;
  transition: all 0.2s ease-in-out;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: -7px;
    height: 3px;
    background: linear-gradient(
      to left,
      #e51862,
      rgba(#781cb0, 1) 50%,
      rgba(#781cb0, 0) 100%
    );
    width: 0;
    will-change: width;
    transition: all 0.3s ease-in-out;

    @include md-down($screen-md) {
      bottom: -10px;
      background: linear-gradient(to left, #e51862, rgba(#781cb0, 1));
    }
  }

  &:hover,
  &.active {
    color: $gray-100;

    &::after {
      width: 95px;
      @include md-down($screen-md) {
        width: 100%;
      }
    }
  }
}

.layout__content-wrapper {
  position: relative;
  // height: 100vh;
  width: 100%;
  padding-right: 0;
  z-index: 10;
  will-change: padding-right;
  display: flex;
  justify-content: center;
  align-items: center;

  &--fixed {
    position: fixed;
    width: unset;
    margin-right: calc(-1 * (100vw - 100%));
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.layout__heading {
  color: white;
  font-weight: $fw-bold;
  text-transform: uppercase;
  letter-spacing: $tracking-widest;
  text-align: center;
  @include fz($fz-6xl, $fz-5xl);
}

.layout__subheading {
  color: $gray-100;
  font-weight: $fw-thin;
  text-transform: uppercase;
  letter-spacing: $tracking-widest;
  text-align: center;
  @include fz($fz-lg, $fz-sm);
}

.layout__actions {
  display: flex;
  justify-content: center;
  transform: translateY($sp-16);

  @include md-down(470px) {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    @include md-down(470px) {
      width: 100%;
      max-width: 180px;
    }
    &:first-child {
      margin-right: $sp-12;
      @include md-down(470px) {
        margin-right: 0;
        margin-bottom: $sp-4;
      }
    }
  }
}

.layout__content {
  background: white;
  border-radius: $rounded-sm;
  margin: 0;
  min-height: 100vh;
  width: 100%;
}

// NAV STATES

@include md-up($screen-md) {
  .layout__content-wrapper {
    padding-right: 17vw;
    transform: translate3d(0, 0, 0);
  }

  .layout__menu {
    transform: translate3d(-100%, 0, 0);
  }
}

.open-nav {
  .layout__content-wrapper {
    transform: translate3d(-100%, 0, 0);
  }

  .layout__menu {
    transform: translate3d(-100%, 0, 0);
  }

  .logo > .letter-a,
  .nav-toggle > * {
    fill: white !important;
  }

  @include md-up($screen-md) {
    .layout__content-wrapper {
      padding-right: 17vw;
      transform: translate3d(0, 0, 0);
    }

    .layout__menu {
      transform: translate3d(-100%, 0, 0);
    }

    .logo > .letter-a {
      fill: $gray-800 !important;
    }
  }
}

.close-nav {
  .layout__content-wrapper {
    transform: translate3d(0, 0, 0);
  }

  .layout__menu {
    transform: translate3d(0, 0, 0);
  }

  @include md-up($screen-md) {
    .layout__content-wrapper {
      padding-right: 0;
    }

    .layout__menu {
      transform: translate3d(0, 0, 0);
    }

    .nav-toggle > * {
      fill: $gray-800 !important;
    }
  }
}

.is-home {
  .nav-toggle > *,
  .logo > .letter-a {
    fill: white !important;
  }
}

.nav-toggle > * {
  fill: $gray-800 !important;
  @include md-up($screen-md) {
    fill: white !important;
  }
}

// END NAV STATES

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translate3d(-50px, 0, 0) !important;
}

.slide-leave,
.slide-enter-to {
  opacity: 1;
  transform: translate3d(0, 0, 0) !important;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  transform: scale3d(0.97, 0.97, 1);
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  transform: scale3d(1, 1, 1);
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 0.3s ease-in-out, transform 0.4s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.4s ease-in-out;
}

@keyframes zoomin {
  0% {
    transform: scale3d(1, 1, 1);
  }
  100% {
    transform: scale3d(4, 4, 1);
  }
}
</style>