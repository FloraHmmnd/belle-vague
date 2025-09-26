<script setup lang="ts">
import { Spot } from 'src/types/spot';

defineOptions({
  name: 'card',
});

defineProps<{
  spot: Spot;
}>();
</script>

<template>
  <div
    class="flex flex-col md:flex-row w-80 max-w-xs bg-neutral rounded-lg shadow-md overflow-hidden"
  >
    <div class="w-full md:w-40 aspect-[3/2] flex-shrink-0">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="spot photo"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-2 flex-1 text-marine">
      <h3 class="font-bold text-lg text-gradient">{{ spot.name }}</h3>
      <p class="text-sm text-sky">{{ spot.address }}</p>
      <div class="mt-1 text-sm">
        <span class="font-semibold text-ultramarine">Level:</span> {{ spot.level }}<br />
        <span class="font-semibold text-ultramarine">Best season:</span> {{ spot.bestSeason }}<br />
        <span class="font-semibold text-ultramarine">Water quality:</span>
        {{ spot.waterQuality }}/100<br />
        <span class="font-semibold text-ultramarine">Air temp:</span>
        {{ spot.airTemperature }}°C<br />
        <span class="font-semibold text-ultramarine">Water temp:</span>
        {{ spot.waterTemperature }}°C
      </div>
    </div>
  </div>
</template>
