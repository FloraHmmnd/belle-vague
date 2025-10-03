<script setup lang="ts">
defineOptions({
  name: 'NavigationHeader',
});

defineProps<{
  to: string;
}>();
</script>
<template>
  <header class="flex justify-between items-center">
    <RouterLink :to>
      <ReturnBtn />
    </RouterLink>
    <slot></slot>
  </header>
</template>
