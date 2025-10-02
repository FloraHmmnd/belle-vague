<script setup lang="ts">
defineOptions({
  name: 'Footer',
});
</script>
<template>
  <footer class="h-10 w-full font-bold text-dark font-quicksand border-t">
    <ul class="flex gap-6 justify-end items-center p-2">
      <li>
        <RouterLink to="/about" class="hover:text-gradient">About</RouterLink>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/flora-hommand/"
          target="_blank"
          class="hover:text-gradient"
          >LinkedIn</a
        >
      </li>
      <li>
        <a href="https://github.com/FloraHmmnd" target="_blank" class="hover:text-gradient"
          >Github</a
        >
      </li>
    </ul>
  </footer>
</template>
