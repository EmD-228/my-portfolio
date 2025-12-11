<template>
  <footer class="bg-black border-t border-primary-gold/20">
    <div class="container mx-auto px-6 py-16">
      <!-- Brand Title -->
      <div class="text-center mb-16">
        <h2 class="text-primary-gold font-display text-6xl md:text-7xl lg:text-8xl leading-none">
          {{ t(footer.title) }}
        </h2>
      </div>
      
      <!-- Footer Links -->
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <!-- Column 1 - Navigation -->
        <div>
          <h3 class="text-primary-gold text-sm font-semibold mb-4">{{ t(footer.navigation.title) }}</h3>
          <ul class="space-y-3">
            <li v-for="item in footer.navigation.items" :key="item.href">
              <a 
                :href="item.href" 
                class="text-white hover:text-primary-gold transition-colors text-sm"
              >
                {{ t(item.label) }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Column 2 - Compétences -->
        <div>
          <h3 class="text-primary-gold text-sm font-semibold mb-4">{{ t(footer.skills.title) }}</h3>
          <ul class="space-y-3">
            <li v-for="(item, index) in footer.skills.items[currentLanguage]" :key="index">
              <span class="text-white text-sm">
                {{ item }}
              </span>
            </li>
          </ul>
        </div>
        
        <!-- Column 3 - Contact -->
        <div>
          <h3 class="text-primary-gold text-sm font-semibold mb-4">{{ t(footer.contact.title) }}</h3>
          <ul class="space-y-3">
            <li v-for="item in footer.contact.items" :key="item.label.fr || item.label.en">
              <a 
                v-if="item.href"
                :href="item.href" 
                :target="item.href.startsWith('http') ? '_blank' : undefined"
                :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="text-white hover:text-primary-gold transition-colors text-sm"
              >
                {{ t(item.label) }}
              </a>
              <span v-else class="text-white text-sm">
                {{ t(item.label) }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-primary-gold/20 pt-8 flex flex-wrap justify-between items-center gap-4 text-xs text-white/50">
        <p>{{ t(footer.copyright) }}</p>
        <div class="flex gap-6">
          <span class="text-white/30">{{ t(footer.availability) }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { usePortfolio } from '../composables/usePortfolio'

const { footer, t, currentLanguage } = usePortfolio()
</script>

