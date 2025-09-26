<script setup lang="ts">
import { useFetchSpots } from '../composables/spots';

const { data: spots, isLoading, error } = useFetchSpots();
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="bg-neutral p-2 md:p-4">
      <Title></Title>
    </header>
    <div class="flex-1">
      <Map class="h-full">
        <Marker v-for="spot in spots" :key="spot.id" :coords="spot.coordinates" />
        <Controls></Controls>
      </Map>
    </div>
  </div>
</template>
