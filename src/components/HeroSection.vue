<template>
  <section class="sm:min-h-screen pt-16 sm:pt-20 pb-12 px-0 sm:px-6 relative overflow-hidden">
    <div class="relative container mx-auto">
      <div class="max-w-full sm:max-w-xl mx-auto ">
        <img :src="heroImage" alt="Hero"
          class="w-full max-h-full object-cover rounded-lg  sm:border-2 sm:border-primary-gold/30 overflow-hidden">
      </div>
      <div
        class="absolute top-[20%] right-4 sm:right-8 left-4 sm:left-8 flex flex-col  sm:flex-row  justify-between items-start  sm:items-end gap-24 sm:gap-0 ">
        <h1
          class="text-primary-gold font-display text-6xl md:text-10xl lg:text-9xl ">
          {{ t(hero.when_code_meets) }}
        </h1>
        <h1
          class="text-white font-display text-6xl md:text-7xl lg:text-9xl self-end">
          {{ t(hero.design) }}
        </h1>
      </div>
      <div class="invisible sm:visible absolute bottom-16 right-0 left-0 flex justify-between items-end">

        <div class="text-white font-bold text-start">

          <p class="text-md">{{ t(hero.subtitle) }}</p>
          <p class="text-md">{{ t(personal.location) }}</p>

        </div>
        <div class="text-right font-bold">
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
