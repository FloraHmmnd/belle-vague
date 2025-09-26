<script setup lang="ts">
import Mapbox from 'mapbox-gl';
import { MAPBOX_PROVIDE_INJECT } from '../types/map';
import type { MapInjected } from '../types/map';

defineOptions({
  name: 'Controls',
});

const navigationControl = shallowRef<mapboxgl.NavigationControl>();
const { mapbox } = inject(MAPBOX_PROVIDE_INJECT) as MapInjected;

watch(
  mapbox,
  () => {
    if (!mapbox.value) return;
    navigationControl.value = new Mapbox.NavigationControl();
    mapbox.value.addControl(navigationControl.value, 'bottom-right');
  },
  { immediate: true },
);

const render = () => null;
</script>

<template>
  <render></render>
</template>
