import type { LngLat } from 'mapbox-gl';

export interface Spot {
  id: string;
  name: string;
  address: string;
  coordinates: LngLat;
  level: Level;
  bestSeason: BestSeason;
  photo: string;
  waterQuality: number;
  temperature: Temperature;
  timestamp: string;
}

export interface Temperature {
  water: number;
  air: number;
}

export type Level = 'beginner' | 'intermediate' | 'advanced';
export type BestSeason = 'winter' | 'spring' | 'summer' | 'autumn';
