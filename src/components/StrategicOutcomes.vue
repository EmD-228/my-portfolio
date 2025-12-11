<template>
  <section class="bg-primary-darker py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="mb-12">
        <h2 class="text-primary-gold font-display text-5xl md:text-6xl lg:text-7xl leading-none">
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
import ProjectItem from './ProjectItem.vue'
import { usePortfolio } from '../composables/usePortfolio'

const { projects, t } = usePortfolio()
const activeProject = ref(0) // EDOMATCH active by default
</script>

