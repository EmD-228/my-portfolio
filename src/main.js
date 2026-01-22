import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Initialize language from localStorage on app start (only in browser)
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('portfolio-language')
  if (!savedLang || (savedLang !== 'fr' && savedLang !== 'en')) {
    localStorage.setItem('portfolio-language', 'fr')
  }
}

createApp(App).mount('#app')

