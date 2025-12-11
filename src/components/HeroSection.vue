<template>
  <section class="min-h-screen bg-primary-darker pt-20 pb-12 px-6 relative overflow-hidden">
    <div class="container mx-auto max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
        <!-- Left side - Text -->
        <div class="space-y-8 order-2 lg:order-1">
          <h1 class="text-primary-gold font-display text-6xl md:text-7xl lg:text-8xl leading-none whitespace-pre-line">
            {{ t(hero.title) }}
          </h1>
          
          <div class="space-y-4 text-white/80 max-w-md">
            <div>
              <p class="text-xs text-primary-gold mb-1">{{ personal.name }}</p>
              <p class="text-sm">{{ t(hero.subtitle) }}</p>
              <p class="text-sm">{{ t(personal.location) }}</p>
              <p class="text-sm mt-2 text-white/60">{{ t(personal.experience) }}</p>
            </div>
          </div>
          
          <!-- About link -->
          <div class="mt-8">
            <a href="#about" class="text-primary-gold text-sm hover:text-white transition-colors inline-flex items-center gap-2">
              <span>{{ currentLanguage === 'fr' ? 'À propos' : 'About Me' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Right side - Image -->
        <div class="relative order-1 lg:order-2">
          <div class="aspect-[3/4] bg-gradient-to-br from-amber-900/30 to-stone-800/30 rounded-lg overflow-hidden">
            <!-- Placeholder for image -->
            <div class="w-full h-full flex items-center justify-center text-primary-gold/30">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          
          <!-- Side Info -->
          <div class="absolute top-8 -right-4 text-right space-y-2 hidden lg:block">
            <p class="text-xs text-primary-gold">{{ hero.badges[currentLanguage][0] }}</p>
            <p class="text-xs text-white/60">{{ hero.badges[currentLanguage][1] }}</p>
            <p class="text-xs text-primary-gold mt-4">{{ hero.badges[currentLanguage][2] }}</p>
            <p class="text-xs text-white/60">{{ hero.badges[currentLanguage][3] }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolio } from '../composables/usePortfolio'

const { hero, personal, t, currentLanguage } = usePortfolio()
</script>

