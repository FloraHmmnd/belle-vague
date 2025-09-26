<template>
  <div class="h-screen relative">
    <video
      src="https://www.pexels.com/fr-fr/download/video/854351/"
      autoplay
      loop
      muted
      playsinline
      class="absolute w-full h-full object-cover"
    ></video>
    <router-link class="px-6 absolute" to="/spots">
      <Title></Title>
    </router-link>
  </div>
</template>
