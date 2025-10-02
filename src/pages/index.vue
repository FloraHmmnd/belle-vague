<script setup lang="ts">
const isVideoLoaded = ref(false);
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-1 relative">
      <video
        src="https://www.pexels.com/fr-fr/download/video/854351/"
        autoplay
        loop
        muted
        playsinline
        preload="auto"
        class="absolute w-full h-full object-cover"
        @canplaythrough="isVideoLoaded = true"
      ></video>
      <transition name="fade">
        <div v-if="!isVideoLoaded" class="absolute w-full h-full bg-black" />
      </transition>
      <router-link class="px-6 absolute" to="/spots">
        <Title></Title>
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
