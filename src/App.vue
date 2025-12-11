<template>
  <div class="bg-primary-darker min-h-screen">
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
</template>

<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import StrategicOutcomes from './components/StrategicOutcomes.vue'
import ProcessSection from './components/ProcessSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import Footer from './components/Footer.vue'
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

