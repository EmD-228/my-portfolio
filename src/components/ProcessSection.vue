<template>
  <section class="py-20 px-6">
    <div class="container mx-auto space-y-8">
      <!-- Header -->
      <p class="text-primary-gold text-sm mb-4 text-end">{{ t(process.subtitle) }}</p>
      <div class="flex flex-col lg:flex-row justify-between lg:items-end gap-4 items-stretch">
        <h2
          class="flex-2 text-start text-white text-2l sm:text-4xl lg:text-6xl  font-bold max-w-3xl mx-auto  indent-[20%]"
          v-html="tHtml(process.title)"></h2>
        <div class="max-w-sm self-start">

          <span class="text flex-1 text-white text-sm mb-4 text-start">{{ t(process.footer) }}</span>
        </div>

      </div>
      <!-- Process Cards Grid -->
      <div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
          <div class="hidden sm:block"></div>
          <ProcessCard v-for="step in process.steps" :key="step.number" :step-number="step.number"
            :title="t(step.title)" :description="t(step.description)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolio } from '../composables/usePortfolio';
import ProcessCard from './ProcessCard.vue';

const { process, t, tHtml } = usePortfolio()
</script>
