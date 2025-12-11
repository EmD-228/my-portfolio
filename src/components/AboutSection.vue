<template>
  <section id="about" class="bg-primary-darker py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left - Title -->
        <div>
          <h2 class="text-white text-5xl md:text-6xl font-bold leading-tight" v-html="tHtml(about.title)"></h2>
        </div>
        
        <!-- Right - Description -->
        <div class="space-y-6">
          <p class="text-white/70 leading-relaxed">
            {{ t(about.description) }}
          </p>
          
          <div class="space-y-4">
            <div class="flex flex-wrap gap-4">
              <span 
                v-for="(skill, index) in about.skills[currentLanguage]" 
                :key="index"
                class="text-primary-gold text-sm border border-primary-gold/30 px-4 py-2 rounded"
              >
                {{ skill }}
              </span>
            </div>
          </div>
          
          <a 
            href="#works" 
            class="inline-flex items-center gap-2 text-primary-gold hover:text-white transition-colors group"
          >
            <span class="text-sm">{{ t(about.cta) }}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-4 w-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolio } from '../composables/usePortfolio'

const { about, t, tHtml, currentLanguage } = usePortfolio()
</script>

