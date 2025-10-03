<script setup lang="ts">
import { Spot } from '../../types/spot';
import { useFetchSpots } from '../../composables/spots';
import type { GeocodingFeature } from '../../types/map';

const { data: spots } = useFetchSpots();

const selectedLocation = ref<GeocodingFeature>();
const center = computed(() => selectedLocation.value?.geometry.coordinates);
const selectedSpot = ref<Spot>();
const safeselectedSpotCoords = computed(() =>
  typeof selectedSpot.value?.coordinates === 'string'
    ? JSON.parse(selectedSpot.value?.coordinates)
    : selectedSpot.value?.coordinates,
);
const zoomLevel = ref<number>();
const isMacroZoomLevel = computed(() => zoomLevel.value && zoomLevel.value >= 6);
const isMarkerDisplayed = computed(() => isMacroZoomLevel.value && spots.value);
</script>

<template>
  <div class="flex flex-col h-screen relative">
    <div class="absolute z-10 top-3 left-3 right-3">
      <NavigationHeader to="/">
        <LocationSearch v-model="selectedLocation" class="h-fit" />
      </NavigationHeader>
    </div>
    <div class="flex-1 relative">
      <Map class="h-full" :center v-model="zoomLevel">
        <Controls />
        <template v-if="spots">
          <MarkerWrapper :spots v-if="isMarkerDisplayed" />
          <template v-else>
            <SpotLayer :spots v-model="selectedSpot" />
            <Popup v-if="selectedSpot" :coords="safeselectedSpotCoords">
              <Card :spot="selectedSpot" />
            </Popup>
          </template>
        </template>
      </Map>
    </div>
  </div>
</template>
