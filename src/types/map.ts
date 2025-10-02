import type { InjectionKey, Ref } from 'vue';

export interface MapInjected {
  mapbox: Ref<mapboxgl.Map | undefined>;
  isMapLoaded: Ref<boolean>;
}

export const MAPBOX_PROVIDE_INJECT = Symbol(
  'MAPBOX_MAP_PROVIDE_INJECT',
) as InjectionKey<MapInjected>;

export const MARKER_PROVIDE_INJECT = Symbol('MAPBOX_MARKER_PROVIDE_INJECT');

export interface MarkerInjected {
  marker: Ref<mapboxgl.Marker | undefined>;
}
