<template>
  <div class="bg-primary-gray borde p-8 hover:border-primary-gold/50 transition-all group">
    <div class="flex justify-between items-start mb-6">
      <span class="text-primary-gold text-sm font-bold">{{ stepNumber }}</span>
      <h3 class="text-primary-gold text-2xl md:text-3xl font-bold">{{ title }}</h3>
    </div>
    <div class="flex justify-center my-8">
      <AddIcon class="h-16 w-16" :class="isHovered ? 'text-primary-dark' : 'text-primary-gold'" />
    </div>
    
      <p class="text-white text-sm font-normal text-start leading-relaxed col-span-4 indent-[50%] mr-10">
        {{ description }}
      </p>
   
  </div>
</template>

<script setup>
import { AddIcon } from '@placetopay/iconsax-vue/outline';
defineProps({
  stepNumber: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  processGridPosition: {
    type: String,
    required: true,
    default: 'md:grid-cols-3'
  }
})
</script>
