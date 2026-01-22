<template>
  <section class="bg-primary-darker py-20 px-6">
    <div class="container mx-auto space-y-8">
      <!-- Header -->
      <p class="text-primary-gold text-sm mb-4 text-end">{{ t(process.subtitle) }}</p>
      <div class="flex justify-between items-end gap-">
        <h2
          class="flex-2 text-start text-white text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight indent-[20%]"
          v-html="tHtml(process.title)"></h2>
          <span class="text flex-1 text-white text-sm mb-4 text-start">{{ t(process.footer) }}</span>

      </div>
      <!-- Process Cards Grid -->
     <div >
      <div class="grid md:grid-cols-3 gap-6 py-16">
        <div></div>
        <ProcessCard v-for="step in process.steps" :key="step.number" :step-number="step.number" :title="t(step.title)"
          :description="t(step.description)" />
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
