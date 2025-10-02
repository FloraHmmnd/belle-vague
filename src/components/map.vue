<script setup lang="ts">
import Mapbox from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_PROVIDE_INJECT, DEFAULT_CENTER } from '../types/map';
import { useElementSize } from '@vueuse/core';
import type { LngLatLike } from 'mapbox-gl';

defineOptions({
  name: 'Map',
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    center?: LngLatLike;
  }>(),
  {
    center: (): LngLatLike => DEFAULT_CENTER,
  },
);

const accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
const centerRef = computed(() => props.center);
const options = computed<mapboxgl.MapOptions>(() => ({
  accessToken,
  container: 'mapbox-map',
  style: 'mapbox://styles/mapbox/satellite-streets-v12',
  center: centerRef.value,
  zoom: 2.5,
}));
const mapbox = shallowRef<mapboxgl.Map>();
const mapRef = useTemplateRef('map');
const isMapLoaded = ref(false);

provide(MAPBOX_PROVIDE_INJECT, { mapbox, isMapLoaded });

const { width, height } = useElementSize(mapRef);

watch([width, height, isMapLoaded], () => {
  if (!mapbox.value) return;
  mapbox.value.resize();
});

watch(centerRef, () => {
  if (!mapbox.value) return;
  mapbox.value.setCenter(centerRef.value);
  if (mapbox.value.getZoom() < 12) {
    mapbox.value.setZoom(12);
  }
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
    <div id="mapbox-map" v-bind="$attrs" ref="map" />
    <slot />
  </div>
</template>
