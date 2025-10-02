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
import type { Swell } from '../types/spot';

defineOptions({ name: 'SwellChart' });

const props = defineProps<{ spot: any }>();

ChartJS.register(Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement, Legend);

const labels = computed(() =>
  props.spot.swell.map((s: Swell) => new Date(s.date).toLocaleDateString()),
);

const CHART_COLORS = {
  height: '#40E0D0',
  period: '#FF00FF',
  direction: '#8eBFD1',
};

const swellChartData = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      label: 'Height (m)',
      data: props.spot.swell.map((s: Swell) => s.height),
      borderColor: CHART_COLORS.height,
      backgroundColor: CHART_COLORS.height,
      tension: 0.3,
    },
    {
      label: 'Period (s)',
      data: props.spot.swell.map((s: Swell) => s.period),
      borderColor: CHART_COLORS.period,
      backgroundColor: CHART_COLORS.period,
      tension: 0.3,
    },
    {
      label: 'Direction (°)',
      data: props.spot.swell.map((s: Swell) => s.direction),
      borderColor: CHART_COLORS.direction,
      backgroundColor: CHART_COLORS.direction,
      tension: 0.3,
    },
  ],
}));

const swellChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' as const },
    tooltip: { mode: 'index' as const, intersect: false },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
</script>

<template>
  <div class="h-96 w-full py-4">
    <h2 class="text-lg font-semibold text-gradient mb-2">Swell Overview</h2>
    <Line :data="swellChartData" :options="swellChartOptions" />
  </div>
</template>
