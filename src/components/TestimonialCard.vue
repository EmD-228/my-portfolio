<template>
  <div class="flex-1 p-8 text-center">
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

