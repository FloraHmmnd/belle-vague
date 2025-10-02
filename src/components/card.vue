<script setup lang="ts">
import { Spot } from 'src/types/spot';
import { RouterLink } from 'vue-router';

defineOptions({
  name: 'Card',
});

const props = defineProps<{
  spot: Spot;
}>();

const spotPage = computed(() => `/spots/${props.spot.id}`);
</script>

<template>
  <RouterLink
    :to="spotPage"
    aria-label="See the spot"
    class="flex flex-col lg:flex-row w-80 max-w-xs bg-neutral rounded-lg shadow-md overflow-hidden font-quicksand"
  >
    <div class="w-full h-60 lg:w-40 aspect-[3/2] flex-shrink-0">
      <img :src="spot.photo" alt="spot photo" class="w-full h-full object-cover" />
    </div>
    <div class="p-2 flex-1 text-dark">
      <h3 class="font-bold text-lg text-gradient">{{ spot.name }}</h3>
      <p class="text-sm text-sky">{{ spot.address }}</p>
      <div class="mt-1 text-sm">
        <span class="font-semibold text-ultramarine">Level:</span> {{ spot.level }}<br />
        <span class="font-semibold text-ultramarine">Best season:</span>
        {{ spot.bestSeason }}<br />
        <span class="font-semibold text-ultramarine">Water quality:</span>
        {{ spot.waterQuality }}/100<br />
        <span class="font-semibold text-ultramarine">Air temp:</span>
        {{ spot.airTemperature }}°C<br />
        <span class="font-semibold text-ultramarine">Water temp:</span>
        {{ spot.waterTemperature }}°C
      </div>
    </div>
  </RouterLink>
</template>
