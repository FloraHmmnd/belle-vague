import type { InjectionKey, Ref } from 'vue';

export interface MapboxInjected {
  mapbox: Ref<mapboxgl.Map | undefined>;
}

export const MAPBOX_PROVIDE_INJECT = Symbol(
  'MAPBOX_PROVIDE_INJECT',
) as InjectionKey<MapboxInjected>;
