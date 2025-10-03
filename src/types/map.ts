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

export interface GeocodingFeature {
  id: string;
  type: 'Feature';
  place_type: string[];
  relevance: number;
  properties: Record<string, any>;
  text: string;
  place_name: string;
  bbox?: [number, number, number, number];
  center?: [number, number];
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
  context?: {
    id: string;
    short_code?: string;
    wikidata?: string;
    text: string;
  }[];
}

export const DEFAULT_CENTER: [number, number] = [2.2137, 46.2276];

export const DEFAULT_ZOOM_LEVEL = 2.5;
