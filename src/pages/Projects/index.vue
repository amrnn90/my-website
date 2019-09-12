<template>
  <div class="h-full p-20 pt-24">
    <h1 class="font-serif font-medium text-4xl text-gray-800 text-center">
      Some of the things I do
      <div>
        <Squiggles class="inline-block" />
      </div>
    </h1>

    <div class="projects max-w-2xl mx-auto mt-16 flex justify-between">
      <div class="relative bg-gray-400 w-64 h-64">
        <div class="project-description">
          <h3 class="font-serif text-gray-900 uppercase tracking-wider">Chatbed</h3>
          <p class="mt-2 text-sm text-gray-600">Quickly embed a chat window in your website.</p>
        </div>
      </div>
      <div class="relative bg-gray-400 w-64 h-64">
        <div class="project-description project-description--alternate">
          <h3 class="font-serif text-gray-900 uppercase tracking-wider">Chatbed</h3>
          <p class="mt-2 text-sm text-gray-600">Quickly embed a chat window in your website.</p>
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
.project-description {
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
</style>