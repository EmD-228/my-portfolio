<template>
    <div class="text-center mt-12">
        <a 
          href="#works"
          class="inline-block bg-transparent border border-primary-gold text-primary-gold px-8 py-3  hover:bg-primary-gold hover:text-black transition-all"
        >
          {{ text }}
        </a>
      </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>