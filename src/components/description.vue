<script setup lang="ts">
import type { SpotDetail } from 'src/types/spot';

defineOptions({ name: 'description' });

defineProps<{
  spot: SpotDetail;
}>();
</script>

<template>
  <div class="p-6 h-full text-dark font-quicksand flex flex-col gap-4">
    <h1 class="text-6xl font-bold text-gradient font-picnic leading-tight">{{ spot.name }}</h1>
    <p class="text-sm text-sky">{{ spot.address }}</p>
    <div class="grid grid-cols-2 gap-y-2 text-sm">
      <p><span class="font-semibold text-ultramarine">Level:</span> {{ spot.level }}</p>
      <p>
        <span class="font-semibold text-ultramarine">Best season:</span>
        {{ spot.bestSeason }}
      </p>
      <p>
        <span class="font-semibold text-ultramarine">Water quality:</span>
        {{ spot.waterQuality }}/100
      </p>
      <p>
        <span class="font-semibold text-ultramarine">Air temp:</span>
        {{ spot.airTemperature }}°C
      </p>
      <p>
        <span class="font-semibold text-ultramarine">Water temp:</span>
        {{ spot.waterTemperature }}°C
      </p>
      <p>
        <span class="font-semibold text-ultramarine">Date:</span>
        {{ new Date(spot.timestamp).toLocaleDateString() }}
      </p>
    </div>
    <hr class="border-neutral-300" />
    <section>
      <h2 class="text-lg font-semibold text-gradient">History</h2>
      <p class="text-sm leading-relaxed text-dark/80">
        {{ spot.history }}
      </p>
    </section>
    <section class="mt-6">
      <h2 class="text-lg font-semibold text-gradient">Conditions</h2>
      <p class="text-sm leading-relaxed text-dark/80">
        {{ spot.conditions }}
      </p>
    </section>
    <section class="mt-6">
      <h2 class="text-lg font-semibold text-gradient">Tips</h2>
      <p class="text-sm leading-relaxed text-dark/80">
        {{ spot.tips }}
      </p>
    </section>
  </div>
</template>
