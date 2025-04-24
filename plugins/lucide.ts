import { defineNuxtPlugin } from '#app'
import * as icons from 'lucide-vue-next'

export default defineNuxtPlugin((nuxtApp) => {
  for (const [name, component] of Object.entries(icons)) {
    nuxtApp.vueApp.component(name, component)
  }
})