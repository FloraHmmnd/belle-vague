<script setup lang="ts">
import { useFetchSpot } from '../../composables/spots';

const { data: spot, isLoading, isError } = useFetchSpot();
</script>
<template>
  <div class="flex flex-col h-screen lg:flex-row relative">
    <p v-if="isLoading" class="text-gradient font-picnic p-6 text-2xl lg:text-6xl">Loading...</p>
    <p v-else-if="isError" class="text-gradient font-picnic p-6 text-2xl lg:text-6xl">Error</p>
    <template v-else>
      <section class="lg:border-r w-full lg:w-1/2 h-full bg-neutral lg:overflow-y-auto">
        <RouterLink to="/spots" class="sticky top-0">
          <ReturnBtn />
        </RouterLink>
        <Description :spot />
      </section>
      <section class="w-full h-full lg:overflow-y-auto">
        <Observations :spot />
      </section>
    </template>
  </div>
</template>
