<template>
  <div v-if="hasError" class="min-h-screen bg-black text-white flex items-center justify-center p-6">
    <div class="text-center max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-red-500">Erreur de rendu</h1>
      <p class="text-gray-400 mb-4">{{ errorMessage }}</p>
      <pre class="text-xs text-gray-500 mb-4 text-left overflow-auto">{{ errorStack }}</pre>
      <button 
        @click="reload"
        class="px-4 py-2 bg-primary-gold text-black rounded hover:bg-primary-gold/80"
      >
        Recharger la page
      </button>
    </div>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)
const errorMessage = ref('')
const errorStack = ref('')

onErrorCaptured((err, instance, info) => {
  hasError.value = true
  errorMessage.value = err.message || 'Une erreur est survenue'
  errorStack.value = err.stack || info || 'Pas de détails disponibles'
  console.error('Error caught:', err, info)
  return false
})

const reload = () => {
  window.location.reload()
}
</script>

