<script setup lang="ts">
import { SpotDetail } from '../types/spot';
import SwellChart from './swell-chart.vue';

defineOptions({
  name: 'Observations',
});

defineProps<{
  spot: SpotDetail;
}>();
</script>

<template>
  <div class="flex flex-col h-full gap-16 p-4">
    <SwellChart :spot />
    <TemperatureChart :spot />
    <WaterQualityChart :spot />
    <AcidityChart :spot />
    <SalinityChart :spot />
  </div>
</template>
