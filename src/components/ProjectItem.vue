<template>
  <div class="group border-t border-white/50 py-6 px-4 sm:px-7 transition-all cursor-pointer"
    :class="isHovered  ? 'bg-primary-gold' : 'bg-primary-gray'" @mouseenter="handleHover"
    @mouseleave="handleLeave">
    <div class="flex-none sm:flex items-center justify-between gap-4">
      <div class="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 ">
        <span class="text-sm font-bold transition-colors"
          :class="isHovered   ? 'text-primary-dark' : 'text-primary-gold'">0-0{{ index
          }}</span>
        <div>
          <h3 class="text-2xl md:text-3xl font-extrabold transition-colors"
            :class="isHovered   ? 'text-primary-dark' : 'text-white'">
            {{ title }}
          </h3>
          <p class="text-sm mt-1" :class="isHovered   ? 'text-primary-dark/80' : 'text-white/50'">{{ description }}</p>
        </div>
      </div>

      <a href="#" class="hidden  border px-4 py-1 sm:flex items-center gap-2 text-sm"
       :class="isHovered   ? 'border-primary-dark' : 'border-primary-gold'">
        <span class="hidden md:inline"
          :class="isHovered   ? 'text-primary-dark' : 'text-primary-gold'">Case
          Study</span>
        <AddIcon class="h-6 w-6" :class="isHovered   ? 'text-primary-dark' : 'text-primary-gold'" />
      </a>
    </div>

    <!-- Preview image (shown on hover/active) -->
    <transition name="slide">
      <div v-if="isActive" class="mt-6 rounded-lg overflow-hidden">
        <div class="aspect-video bg-gradient-to-br from-primary-gold/20 to-stone-800/30">
          <!-- Placeholder for project image -->
          <div class="w-full h-full flex items-center justify-center text-primary-gold/30">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { AddIcon } from '@placetopay/iconsax-vue/outline';
import { ref } from 'vue';
const isHovered = ref(false);
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
const handleHover = () => {
  isHovered.value = true;
}
const handleLeave = () => {
  isHovered.value = false;
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
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
