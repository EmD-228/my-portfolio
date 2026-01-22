<template>
  <section class="bg-primary-darker py-20 px-6">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-12">
        <p class="text-primary-gold text-sm font-bold">{{ t(achievements.subtitle) }}</p>
        <p class="text-primary-gold text-sm font-bold">{{ t(achievements.experience) }}</p>
      </div>
      
      <!-- Title -->
      <div class="text-center mb-16">
        <h2 class="text-primary-gold text-5xl md:text-6xl font-bold">
          {{ t(achievements.title) }}
        </h2>
      </div>
      
      <!-- Stats Grid -->
      <div class="grid md:grid-cols-3 gap-6 items-center justify-items-center">
        <TestimonialCard
          v-for="(achievement, index) in achievements.items"
          :key="index"
          :quote="t(achievement.quote)"
          :author="t(achievement.author)"
        />
      </div>
      
      <!-- CTA -->
      <PrimaryButton :text="t(achievements.cta)" />
      
    </div>
  </section>
</template>

<script setup>
import { usePortfolio } from '../composables/usePortfolio';
import TestimonialCard from './TestimonialCard.vue';
import PrimaryButton from './PrimaryButton.vue';

const { achievements, t } = usePortfolio()
</script>

