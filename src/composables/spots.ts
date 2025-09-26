import { useQuery } from '@tanstack/vue-query';
import { Spots } from 'src/types/spot';

export function useFetchSpots() {
  return useQuery({
    queryKey: ['FETCH_BELLE_VAGUE_SPOTS'],
    queryFn: async () => {
      const res = await fetch('/datas/spots.json');
      return res.json();
    },
  });
}
