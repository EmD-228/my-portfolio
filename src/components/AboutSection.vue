<template>
  <!-- <div class="space-y-4">
            <div class="flex flex-wrap gap-4">
              <span
                v-for="(skill, index) in (about.skills && about.skills[currentLanguage.value] ? about.skills[currentLanguage.value] : [])"
                :key="index" class="text-primary-gold text-sm border border-primary-gold/30 px-4 py-2 rounded">
                {{ skill }}
              </span>
            </div>
          </div> -->

  <section id="about" class="bg-primary-darker py-20 px-6">

    <div class="grid grid-cols-3 justify-between items-start ">
      <div class="text-primary-gold text-sm font-bold hover:text-white">
        {{
          currentLanguage === 'fr' ? 'À propos' : 'About Me' }}
      </div>
      <div class="col-span-2 space-y-6">
        <div>
          <h2 class="indent-[30%] text-white text-5xl md:text-6xl font-bold" v-html="tHtml(about.title)"></h2>
        </div>
        <div class="flex justify-between items-center gap-24">
          <p class="text-white leading-relaxed whitespace-pre-line max-w-[60%]">
            {{ t(about.description) }}
          </p>

          <PrimaryButton :text="t(about.cta)" />


        </div>
      </div>
    </div>

  </section>
</template>
<script setup>
import { AddIcon } from '@placetopay/iconsax-vue/outline';
import { ref } from 'vue';
import { usePortfolio } from '../composables/usePortfolio';
import PrimaryButton from './PrimaryButton.vue';
const isHovered = ref(false);
const { about, t, tHtml, currentLanguage } = usePortfolio()
</script>
