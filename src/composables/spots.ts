import { useQuery } from '@tanstack/vue-query';

export function useFetchSpots() {
  return useQuery({
    queryKey: ['FETCH_BELLE_VAGUE_SPOTS'],
    queryFn: async () => {
      const res = await fetch('/data/spots.json');
      return res.json();
    },
  });
}
