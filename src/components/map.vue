<script setup lang="ts">
import Mapbox from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_PROVIDE_INJECT } from '../types/map';

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
provide(MAPBOX_PROVIDE_INJECT, { mapbox });

watch(mapbox, async () => {
  if (!mapbox.value) return;
  await nextTick();
  mapbox.value.resize();
});

onMounted(() => {
  mapbox.value = new Mapbox.Map(options.value);
});

onBeforeUnmount(() => {
  if (!mapbox.value) return;
  mapbox.value.remove();
  mapbox.value = undefined;
});
</script>
<template>
  <div class="contents">
    <div id="mapbox-map" v-bind="$attrs"></div>
    <slot></slot>
  </div>
</template>
