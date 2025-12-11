<template>
  <section class="bg-primary-darker py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-primary-gold text-sm mb-4">{{ t(process.subtitle) }}</p>
        <h2 class="text-white text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight" v-html="tHtml(process.title)"></h2>
      </div>
      
      <!-- Process Cards Grid -->
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <ProcessCard
          v-for="step in process.steps"
          :key="step.number"
          :step-number="step.number"
          :title="t(step.title)"
          :description="t(step.description)"
        />
      </div>
      
      <!-- CTA -->
      <div class="text-center">
        <p class="text-white/70 mb-4">
          {{ t(process.footer) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProcessCard from './ProcessCard.vue'
import { usePortfolio } from '../composables/usePortfolio'

const { process, t, tHtml } = usePortfolio()
</script>

