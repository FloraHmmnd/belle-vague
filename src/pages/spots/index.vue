<script setup lang="ts">
import { useFetchSpots } from '../../composables/spots';

const { data: spots } = useFetchSpots();
</script>

<template>
  <div class="flex flex-col h-screen relative">
    <RouterLink to="/" class="absolute z-10 left-3">
      <ReturnBtn />
    </RouterLink>
    <div class="flex-1">
      <Map class="h-full">
        <Marker v-for="spot in spots" :key="spot.id" :coords="spot.coordinates">
          <Popup>
            <Card :spot />
          </Popup>
        </Marker>
        <Controls />
      </Map>
    </div>
  </div>
</template>
