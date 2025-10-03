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

defineOptions({ name: 'SalinityChart' });

const props = defineProps<{ spot: SpotDetail }>();

ChartJS.register(Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement, Legend);

const labels = computed(() =>
  props.spot.observations.map((o: Observation) => new Date(o.date).toLocaleDateString()),
);

const CHART_COLOR = '#1A4F9C';

const salinityChartData = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      data: props.spot.observations.map((o: Observation) => o.salinity),
      borderColor: CHART_COLOR,
      backgroundColor: CHART_COLOR,
      tension: 0.3,
    },
  ],
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      min: 0,
      max: 40,
    },
  },
};
</script>

<template>
  <div class="h-96 w-full">
    <h2 class="text-lg font-semibold text-gradient mb-2">Salinity PSU</h2>
    <Line :data="salinityChartData" :options="chartOptions" />
  </div>
</template>
