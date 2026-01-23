<template>
  <section class="py-20">
    <div class="container mx-auto">
      <div class="-mb-3 mx-auto text-center">
        <h2 class="text-primary-gold font-display text-5xl md:text-6xl lg:text-9xl leading-none">
          {{ t(projects.title) }}
        </h2>
      </div>
      
      <div class="space-y-0">
        <ProjectItem
          v-for="(project, idx) in projects.items"
          :key="project.id"
          :index="project.id"
          :title="project.title"
          :description="t(project.description)"
          :is-active="activeProject === idx"
          @click="activeProject = idx"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePortfolio } from '../composables/usePortfolio'
import ProjectItem from './ProjectItem.vue'

const { projects, t } = usePortfolio()
const activeProject = ref(0) // EDOMATCH active by default
</script>

