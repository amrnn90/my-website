<template>
  <div class="text-base text-gray-800 font-sans antialiased background bg-cover">
    <div class="relative">
      <header class="absolute left-0 right-0 max-w-6xl mx-auto py-8">
        <div class="">
          <Logo />
        </div>
      </header>

      <div class="max-w-6xl mx-auto h-full flex items-center h-screen">
        <div class="w-10/12">
          <h1
            class="text-white font-bold uppercase text-center"
            style="font-size: 90px; letter-spacing: 10px"
          >Amr Noman</h1>
          <h3 class="text-center text-gray-100 font-light text-lg uppercase tracking-widest">&lt;/ Fullstack Web Developer &gt;</h3>
        </div>
        <aside class="w-2/12 pl-8">
          <a href="#" class="block uppercase text-gray-300 text-lg tracking-widest my-8">My Work</a>
          <a href="#" class="block uppercase text-gray-300 text-lg tracking-widest my-8">About Me</a>
          <a href="#" class="block uppercase text-gray-300 text-lg tracking-widest my-8">Contact</a>
        </aside>
      </div>

      <transition name="fade">
        <router-view v-if="$route.path != '/'" />
      </transition>
    </div>
  </div>
</template>

<script>
import Logo from "~/assets/svgs/Logo.svg";

export default {
  components: {
    Logo
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
.background {
  background-image: url("..//assets/Background.jpg");
  position: relative;
  &::before {
    background-color: rgba(#120519, 0.72);
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: "";
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>