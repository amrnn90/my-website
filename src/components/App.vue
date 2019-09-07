<template>
  <div id="app">
    <component v-bind:is="layouts['default']" />
  </div>
</template>

<script>
import DefaultLayout from "~/layouts/Default";
export default {
  props: {
  },
  data() {
    return {
      layouts: {
        default: DefaultLayout,
      }
    };
  },
  
};
</script>
