<script setup lang="ts">
import Mapbox from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_PROVIDE_INJECT, DEFAULT_CENTER } from '../types/map';
import type { LngLatLike } from 'mapbox-gl';
import { useElementSize } from '@vueuse/core';

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
const mapOptions = computed<mapboxgl.MapOptions>(() => ({
  accessToken,
  container: 'mapbox-map',
  style: 'mapbox://styles/mapbox/satellite-streets-v12',
  center: centerRef.value,
  zoom: 2.5,
}));
const mapbox = shallowRef<mapboxgl.Map>();
const isMapLoaded = ref(false);
const zoomLevel = defineModel<number>({ default: 2.5 });

const mapContainer = useTemplateRef('mapContainer');
const { width, height } = useElementSize(mapContainer);

provide(MAPBOX_PROVIDE_INJECT, { mapbox, isMapLoaded });

watch(centerRef, () => {
  if (!mapbox.value) return;
  mapbox.value.setCenter(centerRef.value);
  if (mapbox.value.getZoom() < 12) {
    mapbox.value.setZoom(12);
  }
});

watch([width, height, isMapLoaded], () => {
  if (!mapbox.value) return;
  mapbox.value.resize();
});

onMounted(() => {
  mapbox.value = new Mapbox.Map(mapOptions.value);
  mapbox.value.on('style.load', () => {
    isMapLoaded.value = true;
  });
  mapbox.value.on('zoom', () => {
    if (!mapbox.value) return;
    zoomLevel.value = mapbox.value.getZoom();
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
    <div id="mapbox-map" v-bind="$attrs" ref="mapContainer" />
    <slot />
  </div>
</template>
