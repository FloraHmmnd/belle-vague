<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from 'chart.js';
import { Line } from 'vue-chartjs';
import type { Observation } from '../types/spot';
import { SpotDetail } from '../types/spot';

defineOptions({ name: 'TemperatureChart' });

const props = defineProps<{ spot: SpotDetail }>();

ChartJS.register(Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement, Legend);

const labels = computed(() =>
  props.spot.observations.map((o: Observation) => new Date(o.date).toLocaleDateString()),
);

const CHART_COLORS = {
  airTemperature: '#40E0D0',
  waterTemperature: '#FF00FF',
};

const temperatureChartData = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      label: 'Air Temp °C',
      data: props.spot.observations.map((o: Observation) => o.airTemperature),
      borderColor: CHART_COLORS.airTemperature,
      backgroundColor: CHART_COLORS.airTemperature,
      tension: 0.3,
    },
    {
      label: 'Water Temp °C',
      data: props.spot.observations.map((o: Observation) => o.waterTemperature),
      borderColor: CHART_COLORS.waterTemperature,
      backgroundColor: CHART_COLORS.waterTemperature,
      tension: 0.3,
    },
  ],
}));

const temperatureChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' as const },
    tooltip: { mode: 'index' as const, intersect: false },
  },
  scales: {
    y: {
      min: 0,
      max: 50,
    },
  },
};
</script>

<template>
  <div class="h-96 w-full">
    <h2 class="text-lg font-semibold text-gradient mb-2">Temperatures</h2>
    <Line :data="temperatureChartData" :options="temperatureChartOptions" />
  </div>
</template>
