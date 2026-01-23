<template>
  <ErrorBoundary>
    <div class="bg-primary-background min-h-screen max-w-full sm:max-w-6xl mx-auto lg:border-l lg:border-r lg:border-white">
      <HeaderSection />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <div id="works">
          <ProjectsSection />
        </div>
        <ProcessSection />
        <TestimonialsSection />
        <div id="contact"></div>
      </main>
      <FooterSection/>
    </div>
  </ErrorBoundary>
</template>

<script setup>
import { onErrorCaptured } from 'vue'
import AboutSection from './components/AboutSection.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import FooterSection from './components/FooterSection.vue'
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'

// Capturer les erreurs globales
onErrorCaptured((err, instance, info) => {
  console.error('Error in component:', err, info)
  return false
})
</script>

<style>
/* Global styles */
* {
  scroll-behavior: smooth;
}

body {
  font-family: 'Arial', sans-serif;
}
</style>

