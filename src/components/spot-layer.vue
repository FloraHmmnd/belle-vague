<script setup lang="ts">
import type { Spot, Spots } from 'src/types/spot';
import { type MapInjected, MAPBOX_PROVIDE_INJECT } from '../types/map';
import { FeatureCollection, Point } from 'geojson';

defineOptions({
  name: 'SpotLayer',
});

const { mapbox, isMapLoaded } = inject(MAPBOX_PROVIDE_INJECT) as MapInjected;

const props = defineProps<{ spots: Spots }>();
const layerId = `spot-layer-id`;
const sourceId = `spot-source-id`;
const selectedSpot = defineModel<Spot>();

const geojsonPoints = computed<FeatureCollection<Point>>(() => ({
  type: 'FeatureCollection',
  features: props.spots.map((spot: Spot) => ({
    type: 'Feature',
    properties: { ...spot },
    geometry: { type: 'Point', coordinates: spot.coordinates as [number, number] },
  })),
}));

watch(
  isMapLoaded,
  () => {
    if (!isMapLoaded.value) return;
    setLayer();
    addEventsListenner();
  },
  { immediate: true },
);

function setLayer() {
  if (!mapbox.value) return;
  mapbox.value.addSource(sourceId, {
    type: 'geojson',
    data: geojsonPoints.value,
  });
  mapbox.value.addLayer({
    id: layerId,
    type: 'circle',
    source: sourceId,
    paint: {
      'circle-radius': 7,
      'circle-color': '#1A4F9C',
      'circle-stroke-color': '#40E0D0',
      'circle-stroke-width': 2,
    },
  });
}

function addEventsListenner() {
  if (!mapbox.value) return;
  mapbox.value.on('mouseenter', layerId, () => {
    mapbox.value!.getCanvas().style.cursor = 'pointer';
  });
  mapbox.value.on('mouseleave', layerId, () => {
    mapbox.value!.getCanvas().style.cursor = '';
  });
  mapbox.value.on('click', layerId, (e) => {
    const feature = e.features?.[0];
    if (!feature) return;
    selectedSpot.value = feature.properties as Spot;
  });
}

onUnmounted(() => {
  if (mapbox.value?.getLayer(layerId)) {
    mapbox.value.removeLayer(layerId);
  }
  if (mapbox.value?.getSource(sourceId)) {
    mapbox.value.removeSource(sourceId);
  }
});

const render = () => null;
</script>

<template>
  <render />
</template>
