<script setup lang="ts">
import { type MarkerInjected, MARKER_PROVIDE_INJECT } from '../types/map';
import { type MapInjected, MAPBOX_PROVIDE_INJECT } from '../types/map';

import Mapbox from 'mapbox-gl';

defineOptions({
  name: 'Popup',
});

const props = defineProps<{
  coords?: [number, number];
}>();

const popup = shallowRef<mapboxgl.Popup>();
const content = shallowRef<null | HTMLElement>();
const injectedMarker = inject<MarkerInjected | null>(MARKER_PROVIDE_INJECT, null);
const { mapbox } = inject(MAPBOX_PROVIDE_INJECT) as MapInjected;
const coordsRef = computed(() =>
  typeof props.coords === 'string' ? JSON.parse(props.coords) : props.coords,
);

watch(
  [() => injectedMarker?.marker, content, coordsRef],
  () => {
    if (!content.value) return;
    popup.value = new Mapbox.Popup({
      closeButton: false,
      className: 'custom-mapbox-popup',
      maxWidth: '500px',
    });
    popup.value.setDOMContent(content.value as Node);
    if (injectedMarker?.marker?.value) {
      injectedMarker.marker.value.setPopup(popup.value);
    } else if (mapbox.value && coordsRef.value) {
      popup.value.setLngLat(coordsRef.value).addTo(mapbox.value);
    }
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  if (!popup.value) return;
  popup.value.remove();
});
</script>

<template>
  <div ref="content">
    <slot />
  </div>
</template>

<style>
.custom-mapbox-popup .mapboxgl-popup-content {
  background: none !important;
  box-shadow: none !important;
  padding: 0;
}
</style>
