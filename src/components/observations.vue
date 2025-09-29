<script setup lang="ts">
import { SpotDetail } from '../types/spot';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { Line } from 'vue-chartjs';

defineOptions({
  name: 'Observations',
});

const props = defineProps<{
  spot: SpotDetail;
}>();

ChartJS.register(Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement);

const labels = computed(() =>
  props.spot.observations.map((observation) => new Date(observation.date).toLocaleDateString()),
);

function createDataset(
  label: string,
  key: keyof (typeof props.spot.observations)[0],
  color: string,
) {
  return {
    label,
    data: props.spot.observations.map((observation) => observation[key] as number),
    borderColor: color,
    backgroundColor: color + '33',
    tension: 0.3,
  };
}

const airTempChartData = computed(() => ({
  labels: labels.value,
  datasets: [createDataset('Air Temp °C', 'airTemperature', '#1E40AF')],
}));

const waterTempChartData = computed(() => ({
  labels: labels.value,
  datasets: [createDataset('Water Temp °C', 'waterTemperature', '#1E40AF')],
}));

const waterQualityChartData = computed(() => ({
  labels: labels.value,
  datasets: [createDataset('Water Quality %', 'waterQuality', '#1E40AF')],
}));

const acidityChartData = computed(() => ({
  labels: labels.value,
  datasets: [createDataset('Acidity PH', 'ph', '#1E40AF')],
}));

const salinityChartData = computed(() => ({
  labels: labels.value,
  datasets: [createDataset('Salinity PSU', 'salinity', '#1E40AF')],
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
};
</script>

<template>
  <div class="flex flex-col h-full gap-4 px-4">
    <div class="pt-4">
      <h2 class="text-lg font-semibold text-gradient">{{ airTempChartData.datasets[0].label }}</h2>
      <Line :data="airTempChartData" :options="chartOptions" />
    </div>
    <div class="border-t pt-4">
      <h2 class="text-lg font-semibold text-gradient">
        {{ waterTempChartData.datasets[0].label }}
      </h2>
      <Line :data="waterTempChartData" :options="chartOptions" />
    </div>
    <div class="border-t pt-4">
      <h2 class="text-lg font-semibold text-gradient">
        {{ waterQualityChartData.datasets[0].label }}
      </h2>
      <Line :data="waterQualityChartData" :options="chartOptions" />
    </div>
    <div class="border-t pt-4">
      <h2 class="text-lg font-semibold text-gradient">{{ acidityChartData.datasets[0].label }}</h2>
      <Line :data="acidityChartData" :options="chartOptions" />
    </div>
    <div class="border-t pt-4">
      <h2 class="text-lg font-semibold text-gradient">{{ salinityChartData.datasets[0].label }}</h2>
      <Line :data="salinityChartData" :options="chartOptions" />
    </div>
  </div>
</template>
