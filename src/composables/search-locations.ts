import { useQuery } from '@tanstack/vue-query';

export function useSearchLocations(location: Ref<string>) {
  const accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
  return useQuery({
    queryKey: ['USE_SEARCH_LOCATIONS', location],
    queryFn: async () => {
      const baseUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location.value)}.json`;
      const params = new URLSearchParams({
        autocomplete: 'true',
        limit: '5',
        language: 'fr',
        access_token: accessToken,
      });
      const res = await fetch(`${baseUrl}?${params.toString()}`);
      const data = await res.json();
      return data.features;
    },
    enabled: computed(() => location.value.length >= 2),
  });
}
