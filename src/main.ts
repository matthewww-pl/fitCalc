import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import VueScrollTo from 'vue-scrollto'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { pl } from '@formkit/i18n'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import '@formkit/themes/genesis'
import 'tw-elements';
import './style.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const head = createHead()

const i18n = createI18n({
  locale: 'pl',
  messages
})

const pinia = createPinia()

const app = createApp(App)
app.use(head)
app.use(router)
app.use(i18n)
app.use(VueScrollTo)
app.use(pinia)
app.use(
  plugin, 
  defaultConfig({
    locales: { pl },
    locale: 'pl',
  })
)
app.use(MotionPlugin)
app.mount('#app')