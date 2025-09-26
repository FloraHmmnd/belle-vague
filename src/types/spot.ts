import { LngLat } from 'mapbox-gl';

export interface Spot {
  id: string;
  name: string;
  address: string;
  coordinates: LngLat;
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
