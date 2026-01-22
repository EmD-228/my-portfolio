<template>
  <section class="min-h-screen bg-primary-darker pt-20 pb-12 px-6 relative overflow-hidden">
    <div class="relative container mx-auto">
      <div class="max-w-xl mx-auto bg-red-200 ">
        <img :src="heroImage" alt="Hero" class="w-full max-h-full object-cover rounded-lg border-2 border-primary-gold/30 overflow-hidden">
      </div>
      <div class="absolute top-[20%] right-8 left-8 flex justify-between items-end">
        <h1 class="text-primary-gold font-display text-6xl md:text-10xl lg:text-9xl leading-none whitespace-pre-line">
         When Code <br>Meets
        </h1>
        <h1 class="text-primary-gold font-display text-6xl md:text-7xl lg:text-9xl leading-none whitespace-pre-line">
          Design
        </h1>
      </div>
      <div class="absolute bottom-16 right-0 left-0 flex justify-between items-end">

        <div class="text-white font-bold text-start">

          <p class="text-md">{{ t(hero.subtitle) }}</p>
          <p class="text-md">{{ t(personal.location) }}</p>

        </div>
        <div class="text-right hidden lg:block font-bold">
          <p class="text-md text-white">{{ hero.badges[currentLanguage][1] }}</p>
          <p class="text-md text-white">{{ hero.badges[currentLanguage][2] }}</p>
          <p class="text-md text-primary-gold">{{ hero.badges[currentLanguage][3] }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import me from '../assets/images/me.jpg';
import { usePortfolio } from '../composables/usePortfolio';
const { hero, personal, t, currentLanguage } = usePortfolio()
const heroImage = ref(me)
</script>
