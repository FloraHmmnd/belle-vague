import { useQuery } from '@tanstack/vue-query';
import { SpotDetail, Spots } from 'src/types/spot';

export function useFetchSpots() {
  return useQuery<Spots>({
    queryKey: ['FETCH_BELLE_VAGUE_SPOTS'],
    queryFn: async () => {
      const res = await fetch('/datas/spots.json');
      return res.json();
    },
  });
}

export function useFetchSpot(spotId: Ref<string>) {
  return useQuery<SpotDetail>({
    queryKey: ['FETCH_BELLE_VAGUE_SPOT'],
    queryFn: async () => {
      const res = await fetch(`/datas/${spotId.value}.json`);
      return res.json();
    },
    enabled: computed(() => !!spotId.value),
  });
}
