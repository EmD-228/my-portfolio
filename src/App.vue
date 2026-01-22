<template>
  <ErrorBoundary>
    <div class="bg-primary-darker min-h-screen max-w-6xl mx-auto border-l border-r border-white">
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <div id="works">
          <StrategicOutcomes />
        </div>
        <ProcessSection />
        <TestimonialsSection />
        <div id="contact"></div>
      </main>
      <Footer />
    </div>
  </ErrorBoundary>
</template>

<script setup>
import { onErrorCaptured } from 'vue'
import AboutSection from './components/AboutSection.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import StrategicOutcomes from './components/StrategicOutcomes.vue'
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

