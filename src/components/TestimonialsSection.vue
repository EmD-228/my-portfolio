<template>
  <section class="bg-primary-darker py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="flex justify-between items-center mb-12">
        <p class="text-primary-gold text-sm">{{ t(achievements.subtitle) }}</p>
        <p class="text-primary-gold text-sm">{{ t(achievements.experience) }}</p>
      </div>
      
      <!-- Title -->
      <div class="text-center mb-16">
        <h2 class="text-primary-gold text-5xl md:text-6xl font-bold whitespace-pre-line">
          {{ t(achievements.title) }}
        </h2>
      </div>
      
      <!-- Stats Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <TestimonialCard
          v-for="(achievement, index) in achievements.items"
          :key="index"
          :quote="t(achievement.quote)"
          :author="t(achievement.author)"
        />
      </div>
      
      <!-- CTA -->
      <div class="text-center mt-12">
        <a 
          href="#works"
          class="inline-block bg-transparent border border-primary-gold text-primary-gold px-8 py-3 rounded hover:bg-primary-gold hover:text-black transition-all"
        >
          {{ t(achievements.cta) }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from './TestimonialCard.vue'
import { usePortfolio } from '../composables/usePortfolio'

const { achievements, t } = usePortfolio()
</script>

