<template>
  <div 
    class="group border-t border-primary-gold/20 py-6 hover:bg-primary-gold/5 transition-all cursor-pointer"
    :class="{ 'bg-primary-gold/10': isActive }"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4 flex-1">
        <span class="text-primary-gold/50 text-sm font-mono">{{ index }}</span>
        <div>
          <h3 class="text-white text-2xl md:text-3xl font-bold group-hover:text-primary-gold transition-colors">
            {{ title }}
          </h3>
          <p class="text-white/50 text-sm mt-1">{{ description }}</p>
        </div>
      </div>
      
      <a 
        href="#" 
        class="text-primary-gold hover:text-white transition-colors flex items-center gap-2 text-sm"
      >
        <span class="hidden md:inline">Case Study</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    
    <!-- Preview image (shown on hover/active) -->
    <transition name="slide">
      <div v-if="isActive" class="mt-6 rounded-lg overflow-hidden">
        <div class="aspect-video bg-gradient-to-br from-primary-gold/20 to-stone-800/30">
          <!-- Placeholder for project image -->
          <div class="w-full h-full flex items-center justify-center text-primary-gold/30">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
defineProps({
  index: {
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
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

