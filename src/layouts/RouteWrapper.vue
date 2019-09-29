<template>
  <div class="route-wrapper">
    <div class="layout__content-header-background" :style="{background: headerBackground}"></div>
    <slot></slot>
  </div>
</template>

<script>
// const scrollPositions = {};
// let popstateEventBounded = false;
// let isPopstate = false;

export default {
  components: {},
  props: {
    headerBackground: { default: "rgba(255, 255, 255, 0.95)" }
  },
  data() {
    return {
      // currentPath: null
    };
  },
  mounted() {
    // this.currentPath = this.$route.path;
    // const scrollable = this.$el.querySelector(".simplebar-content-wrapper");
    // if (scrollable) {
    //   setTimeout(() => {
    //     scrollable.scrollTop = isPopstate
    //       ? scrollPositions[this.$route.path]
    //       : 0;
    //     isPopstate = false;
    //   }, 10);
    // }
    // if (!popstateEventBounded) {
    //   window.onpopstate = () => {
    //     if (scrollPositions[this.$route.path]) {
    //       isPopstate = true;
    //     }
    //   };
    //   popstateEventBounded = true;
    // }
  },
  destroyed() {
    // const scrollable = this.$el.querySelector(".simplebar-content-wrapper");
    // if (scrollable) {
    //   scrollPositions[this.currentPath] = scrollable.scrollTop;
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/abstract";

.route-wrapper {
  // position: absolute;
  top: 0;
  left: 0;
  right: 0;
  // bottom: 0;
  background: white;
  // @include pt(5rem, 3.4rem);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__content-header-background {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  // height: 200px;
  background: rgba(white, 0.95);
  // @include h(5rem, 3.4rem);
  @include h($sp-24, $sp-16);
}
</style>