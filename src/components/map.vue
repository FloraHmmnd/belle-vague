<script setup lang="ts">
import Mapbox from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_PROVIDE_INJECT } from '../types/map';
import { useElementSize } from '@vueuse/core';

defineOptions({
  name: 'Map',
  inheritAttrs: false,
});

const accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
const options = computed<mapboxgl.MapOptions>(() => ({
  accessToken,
  container: 'mapbox-map',
  style: 'mapbox://styles/mapbox/satellite-streets-v12',
  center: [2.2137, 46.2276],
  zoom: 5,
}));
const mapbox = shallowRef<mapboxgl.Map>();
const mapRef = useTemplateRef('map');
provide(MAPBOX_PROVIDE_INJECT, { mapbox });
const isMapLoaded = ref(false);

const { width, height } = useElementSize(mapRef);

watch([width, height, isMapLoaded], () => {
  if (!mapbox.value) return;
  mapbox.value.resize();
});

onMounted(() => {
  mapbox.value = new Mapbox.Map(options.value);
  mapbox.value.on('style.load', () => {
    isMapLoaded.value = true;
  });
});

onBeforeUnmount(() => {
  if (!mapbox.value) return;
  mapbox.value.remove();
  mapbox.value = undefined;
  isMapLoaded.value = false;
});
</script>
<template>
  <div class="contents">
    <div id="mapbox-map" v-bind="$attrs" ref="map"></div>
    <slot></slot>
  </div>
</template>
