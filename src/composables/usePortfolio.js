import { ref, computed } from 'vue'
import portfolioData from '../data/portfolio.json'

// Shared reactive language state
const currentLanguage = ref('fr')

export function usePortfolio() {
  const setLanguage = (lang) => {
    if (lang === 'fr' || lang === 'en') {
      currentLanguage.value = lang
      localStorage.setItem('portfolio-language', lang)
    }
  }

  const getLanguage = () => {
    return currentLanguage.value
  }

  const toggleLanguage = () => {
    setLanguage(currentLanguage.value === 'fr' ? 'en' : 'fr')
  }

  // Initialize language from localStorage or default to 'fr'
  const initLanguage = () => {
    const savedLang = localStorage.getItem('portfolio-language')
    if (savedLang === 'fr' || savedLang === 'en') {
      currentLanguage.value = savedLang
    }
  }

  // Helper function to get translated text
  const t = (obj) => {
    if (!obj) return ''
    if (typeof obj === 'string') return obj
    if (Array.isArray(obj)) {
      // If it's an array, try to get the translated version
      return obj
    }
    if (obj[currentLanguage.value]) return obj[currentLanguage.value]
    return obj.fr || obj.en || ''
  }

  // Helper function to get translated text with HTML
  const tHtml = (obj) => {
    const text = t(obj)
    return text
  }

  // Computed properties for easy access
  const personal = computed(() => portfolioData.personal)
  const hero = computed(() => portfolioData.hero)
  const about = computed(() => portfolioData.about)
  const projects = computed(() => portfolioData.projects)
  const process = computed(() => portfolioData.process)
  const achievements = computed(() => portfolioData.achievements)
  const footer = computed(() => portfolioData.footer)
  const header = computed(() => portfolioData.header)

  return {
    currentLanguage,
    setLanguage,
    getLanguage,
    toggleLanguage,
    initLanguage,
    t,
    tHtml,
    personal,
    hero,
    about,
    projects,
    process,
    achievements,
    footer,
    header
  }
}

