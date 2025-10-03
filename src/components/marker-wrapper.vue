<script setup lang="ts">
import type { Spots } from '../types/spot';
import { type MapInjected, MAPBOX_PROVIDE_INJECT } from '../types/map';

defineOptions({
  name: 'MarkerWrapper',
});

defineProps<{
  spots: Spots;
}>();

const { isMapLoaded } = inject(MAPBOX_PROVIDE_INJECT) as MapInjected;
</script>
<template>
  <div v-if="isMapLoaded">
    <Marker v-for="spot in spots" :key="spot.id" :coords="spot.coordinates">
      <Popup>
        <Card :spot />
      </Popup>
    </Marker>
  </div>
</template>
