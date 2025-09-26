<script setup lang="ts">
import { shallowRef, watch, onBeforeUnmount, inject, computed } from 'vue';
import type { LngLatLike } from 'mapbox-gl';
import Mapbox from 'mapbox-gl';
import { type MapInjected, MAPBOX_PROVIDE_INJECT, MARKER_PROVIDE_INJECT } from '../types/map';

defineOptions({
  name: 'Marker',
});

const props = defineProps<{ coords: LngLatLike }>();
const marker = shallowRef<mapboxgl.Marker>();
const { mapbox } = inject(MAPBOX_PROVIDE_INJECT) as MapInjected;
provide(MARKER_PROVIDE_INJECT, { marker });

watch(
  mapbox,
  () => {
    if (!mapbox.value) return;
    marker.value = new Mapbox.Marker().setLngLat(props.coords).addTo(mapbox.value);
  },
  { immediate: true },
);

onBeforeUnmount(() => marker.value?.remove());

const render = () => null;
</script>

<template>
  <slot />
</template>
