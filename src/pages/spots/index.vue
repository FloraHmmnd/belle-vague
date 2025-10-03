<script setup lang="ts">
import { useFetchSpots } from '../../composables/spots';
import type { GeocodingFeature } from '../../types/map';

const { data: spots } = useFetchSpots();

const selectedLocation = ref<GeocodingFeature>();
const center = computed(() => selectedLocation.value?.geometry.coordinates);
const isMapLoaded = ref(false);
</script>

<template>
  <div class="flex flex-col h-screen relative">
    <div class="absolute z-10 top-3 left-3 right-3">
      <NavigationHeader to="/">
        <LocationSearch v-model="selectedLocation" class="h-fit"></LocationSearch>
      </NavigationHeader>
    </div>
    <div class="flex-1 relative">
      <Map class="h-full" :center v-model="isMapLoaded">
        <Controls />
        <template v-if="isMapLoaded">
          <Marker v-for="spot in spots" :key="spot.id" :coords="spot.coordinates">
            <Popup>
              <Card :spot />
            </Popup>
          </Marker>
        </template>
      </Map>
    </div>
  </div>
</template>
