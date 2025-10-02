<script setup lang="ts">
import { type MarkerInjected, MARKER_PROVIDE_INJECT } from '../types/map';
import Mapbox from 'mapbox-gl';

defineOptions({
  name: 'Popup',
});

const popup = shallowRef<mapboxgl.Popup>();
const content = shallowRef<null | HTMLElement>();
const { marker } = inject<MarkerInjected>(MARKER_PROVIDE_INJECT) as MarkerInjected;

watch(
  [marker, content],
  () => {
    if (!marker.value || !content.value) return;
    popup.value = new Mapbox.Popup({
      closeButton: false,
      className: 'custom-mapbox-popup',
      maxWidth: '500px',
    });
    popup.value.setDOMContent(content.value as Node);
    marker.value.setPopup(popup.value);
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
