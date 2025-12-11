<template>
  <div class="bg-zinc-900 border border-primary-gold/20 rounded-lg p-8 hover:border-primary-gold/50 transition-all group">
    <div class="flex justify-between items-start mb-6">
      <span class="text-primary-gold/50 text-sm font-mono">{{ stepNumber }}</span>
      <h3 class="text-primary-gold text-2xl md:text-3xl font-bold">{{ title }}</h3>
    </div>
    
    <div class="flex justify-center my-8">
      <div class="w-16 h-16 border-2 border-primary-gold/30 rounded-full flex items-center justify-center group-hover:border-primary-gold transition-colors">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-8 w-8 text-primary-gold" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </div>
    
    <p class="text-white/60 text-sm text-center leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
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
  }
})
</script>

