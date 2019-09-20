<template>
  <div class="layout" :class="{'open-nav': navOpened, 'is-home': isHome}">
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

    <div class="layout__content-wrapper">
      <div class="layout__content-wrapper-inner">
        <div>
          <h1 class="layout__heading">Amr Noman</h1>
          <h2 class="layout__subheading">&lt;/ Fullstack Web Developer&nbsp;&gt;</h2>
          <div class="layout__actions">
            <g-link to="/projects" class="btn btn--primary">See My Work</g-link>
            <g-link to="/contact" class="btn btn--secondary">Contact Me</g-link>
          </div>
        </div>

        <transition name="slidedown">
          <main class="layout__content" v-if="!isHome">
            <transition name="fade">
              <router-view />
            </transition>
          </main>
        </transition>
      </div>
    </div>
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
      navOpened: true,
      scrollPositions: {}
      // remember: []
    };
  },
  methods: {
    toggleNav() {
      this.navOpened = !this.navOpened;
    },
    closeNav() {
      this.navOpened = false;
    },
    closeNavIfMobile() {
      if (document.body.clientWidth < 940) {
        this.closeNav();
      }
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

<style lang="scss" scoped>
@import "../styles/abstract";

.layout {
  position: relative;
  font-size: $fz-base;
  color: $gray-800;
  font-family: $sans;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;

  &::before {
    background: linear-gradient(rgba($gray-900, 0.82), rgba($gray-900, 0.82)),
      url("..//assets/Background.jpg");
    background-position: center;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: "";
    animation: zoomin 20s ease-in-out infinite alternate;
  }
}

.layout__header {
  position: absolute;
  z-index: 1000;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include h(5rem, 3.4rem);
  @include px($sp-16 - $sp-4, $sp-6);

  @include md-up($screen-sm) {
    top: $sp-4;
    left: $sp-4;
    right: $sp-4;
  }

  pointer-events: none;

  .logo,
  .nav-toggle,
  a {
    pointer-events: auto;
  }
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
  position: fixed;
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

  @include md-up($screen-md) {
    @include pr($sp-16, $sp-8);
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
  height: 100vh;
  width: 100%;
  padding-right: 0;
  z-index: 10;
  will-change: padding-right;
}

.layout__content-wrapper-inner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
  // margin-top: $sp-10;
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
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: $rounded-sm;
  margin: 0;
  background: white;
  height: 100%;

  @include md-up($screen-sm) {
    margin: $sp-4;
    height: calc(100% - #{$sp-4 * 2}) !important;
  }
}

.open-nav {
  .layout__content-wrapper {
    transform: translate3d(-100%, 0, 0);
    position: relative;
    @include md-up($screen-md) {
      padding-right: 17vw;
      transform: translate3d(0, 0, 0);
    }
  }

  .layout__menu {
    transform: translate3d(-100%, 0, 0);
  }

  .nav-toggle > * {
    fill: white !important;
  }

  .logo > .letter-a {
    fill: white !important;

    @include md-up($screen-md) {
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

.slidedown-enter,
.slidedown-leave-to {
  transform: translate3d(0, -100%, 0);
}

.slidedown-leave,
.slidedown-enter-to {
  transform: translate3d(0, 0, 0);
}

.slidedown-enter-active,
.slidedown-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-active {
  transition-delay: 0.5s;
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