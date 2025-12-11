<template>
  <div class="bg-zinc-900 border border-primary-gold/20 rounded-lg p-8 hover:border-primary-gold/50 transition-all">
    <blockquote class="text-white text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
      "{{ quote }}"
    </blockquote>
    
    <cite class="not-italic">
      <p class="text-primary-gold text-sm">{{ author }}</p>
    </cite>
  </div>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})
</script>

