<template>
  <header class="bg-primary-background fixed top-0 left-0 right-0 z-50 border-b border-primary-gold/20">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a 
        href="#home" 
        class="text-primary-gold font-bold text-md sm:text-xl tracking-wider hover:text-white transition-colors"
        @click="closeMenu"
      >
       BloodFallen
      </a>
      
      <!-- Desktop Navigation - Hidden on mobile, visible on md+ -->
      <nav class="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
        <a 
          v-for="item in menuItems" 
          :key="item.id"
          :href="item.href"
          class="text-primary-gold hover:text-white transition-colors text-sm font-light tracking-wider focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
          @click="handleDesktopMenuClick"
        >
          {{ t(item.label) }}
        </a>
        
        <!-- Language Selector -->
        <button
          @click="toggleLanguage"
          class="text-primary-gold hover:text-white transition-colors text-sm font-light tracking-wider focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 border border-primary-gold/30"
          :aria-label="currentLanguage.value === 'fr' ? 'Switch to English' : 'Passer en français'"
        >
          {{ currentLanguage.value === 'fr' ? 'EN' : 'FR' }}
        </button>
      </nav>
      
      <!-- Mobile Menu Button - Visible on mobile, hidden on md+ -->
      <button 
        @click="toggleMenu"
        @keydown.escape="closeMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        aria-controls="mobile-menu"
        class="md:hidden text-primary-gold hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-black rounded"
      >
       
        <div 
          class="flex flex-col gap-1 transition-transform duration-300"
          :class="{ 'rotate-90': isMenuOpen }"
        >
          <span 
            class="block w-6 h-0.5 bg-current transition-all duration-300"
            :class="isMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
          ></span>
          <span 
            class="block w-6 h-0.5 bg-current transition-opacity duration-300"
            :class="isMenuOpen ? 'opacity-0' : ''"
          ></span>
          <span 
            class="block w-6 h-0.5 bg-current transition-all duration-300"
            :class="isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
          ></span>
        </div>
      </button>
    </div>
    
    <!-- Mobile Menu - Only visible on mobile -->
    <transition name="fade">
      <div 
        v-if="isMenuOpen" 
        id="mobile-menu"
        ref="menuRef"
        class="md:hidden absolute top-full left-0 right-0 bg-black border-t border-primary-gold/20"
        @click.self="closeMenu"
      >
        <nav class="container mx-auto px-6 py-8" role="navigation" aria-label="Main navigation">
          <ul class="space-y-4">
            <li v-for="item in menuItems" :key="item.id">
              <a 
                :href="item.href"
                class="text-primary-gold hover:text-white transition-colors text-lg block focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                @click="handleMenuClick"
              >
                {{ t(item.label) }}
              </a>
            </li>
            <li>
              <button
                @click="toggleLanguage"
                class="text-primary-gold hover:text-white transition-colors text-lg block focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 w-full text-left border-t border-primary-gold/20 pt-4 mt-4"
              >
                {{ currentLanguage.value === 'fr' ? '🇬🇧 English' : '🇫🇷 Français' }}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
    
    <!-- Overlay - Only visible on mobile -->
    <transition name="fade">
      <div 
        v-if="isMenuOpen"
        class="md:hidden fixed inset-0 bg-black/50 z-40 top-16"
        @click="closeMenu"
        aria-hidden="true"
      ></div>
    </transition>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { usePortfolio } from '../composables/usePortfolio'

const { header, t, toggleLanguage, currentLanguage, initLanguage } = usePortfolio()

const isMenuOpen = ref(false)
const menuRef = ref(null)

const menuItems = computed(() => header.value.menu.items)

// Initialize language on mount
onMounted(() => {
  initLanguage()
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleMenuClick = (event) => {
  // Smooth scroll to section
  const href = event.currentTarget.getAttribute('href')
  if (href.startsWith('#')) {
    event.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  closeMenu()
}

const handleDesktopMenuClick = (event) => {
  // Smooth scroll to section for desktop navigation
  const href = event.currentTarget.getAttribute('href')
  if (href.startsWith('#')) {
    event.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

// Lock body scroll when menu is open
watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Close menu on Escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

// Close menu on outside click
const handleClickOutside = (event) => {
  if (isMenuOpen.value && menuRef.value && !menuRef.value.contains(event.target)) {
    // Check if click is not on the button
    const button = event.target.closest('button[aria-controls="mobile-menu"]')
    if (!button) {
      closeMenu()
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.removeEventListener('click', handleClickOutside)
  // Reset body overflow on unmount
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

