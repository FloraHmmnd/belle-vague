<script setup lang="ts">
import { useSearchLocations } from '../composables/search-locations';
import { useDebounce, onClickOutside } from '@vueuse/core';
import type { GeocodingFeature } from '../types/map';

defineOptions({ name: 'LocationSearch' });

const query = ref('');
const debouncedQuery = useDebounce(query, 300);
const modelValue = defineModel<GeocodingFeature>();
const searchRefContainer = useTemplateRef('searchRefContainer');

const { data: suggestions, isFetching, isError } = useSearchLocations(debouncedQuery);

function selectLocation(location: GeocodingFeature) {
  query.value = '';
  modelValue.value = location;
}

onClickOutside(searchRefContainer, () => {
  query.value = '';
});
</script>

<template>
  <div class="w-60 bg-white p-2 border rounded font-quicksand" ref="searchRefContainer">
    <input placeholder="Rechercher un lieu..." type="text" v-model="query" class="w-full" />
    <div v-if="isFetching" class="text-gray-500 text-sm">Recherche...</div>
    <div v-if="isError" class="text-red-500 text-sm">Erreur de chargement</div>
    <ul v-if="suggestions?.length" class="rounded bg-white">
      <li
        v-for="suggestion in suggestions"
        :key="suggestion.id"
        class="p-2 hover:bg-gray-200 cursor-pointer w-full"
        tabindex="0"
        @click="selectLocation(suggestion)"
        @keydown.enter="selectLocation(suggestion)"
      >
        {{ suggestion.place_name }}
      </li>
    </ul>
  </div>
</template>
