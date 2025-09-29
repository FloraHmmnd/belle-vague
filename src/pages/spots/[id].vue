<script setup lang="ts">
import { useFetchSpot } from '../../composables/spots';

const { data: spot, isLoading, isError } = useFetchSpot();
</script>
<template>
  <div class="flex flex-col h-screen relative md:flex-row">
    <div class="bg-neutral border-r w-full md:w-1/2 h-full">
      <p v-if="isLoading" class="text-gradient font-picnic p-6 text-2xl md:text-6xl">Loading...</p>
      <Description v-else :spot></Description>
    </div>
    <div class="bg-neutral h-full w-full"></div>
  </div>
</template>
