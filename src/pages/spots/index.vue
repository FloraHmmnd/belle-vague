<script setup lang="ts">
import { useFetchSpots } from '../../composables/spots';
import type { GeocodingFeature } from '../../types/map';

const { data: spots } = useFetchSpots();

const selectedLocation = ref<GeocodingFeature>();
const center = computed(() => selectedLocation.value?.geometry.coordinates);
</script>

<template>
  <div class="flex flex-col h-screen relative">
    <RouterLink to="/" class="absolute z-10 left-3">
      <ReturnBtn />
    </RouterLink>
    <div class="flex-1 relative">
      <LocationSearch class="absolute z-10 top-4 right-4" v-model="selectedLocation" />
      <Map class="h-full" :center>
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
