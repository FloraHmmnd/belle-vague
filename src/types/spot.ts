import { LngLat, LngLatLike } from 'mapbox-gl';

export interface Spot {
  id: string;
  name: string;
  address: string;
  coordinates: LngLatLike;
  level: Level;
  bestSeason: BestSeason;
  photo: string;
  waterQuality: number;
  airTemperature: number;
  waterTemperature: number;
  timestamp: string;
}

export type Level = 'beginner' | 'intermediate' | 'advanced';
export type BestSeason = 'winter' | 'spring' | 'summer' | 'autumn';

export type Spots = Spot[];

export interface SpotDetail {
  id: string;
  name: string;
  address: string;
  coordinates: LngLatLike;
  level: Level;
  bestSeason: BestSeason;
  photo: string;
  waterQuality: number;
  airTemperature: number;
  waterTemperature: number;
  timestamp: string;
  history: string;
  conditions: string;
  tips: string;
  observations: Observation[];
}

export interface Observation {
  date: string;
  salinity: number;
  ph: number;
  airTemperature: number;
  waterTemperature: number;
  waterQuality: number;
}
