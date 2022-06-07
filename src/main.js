import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import '@/styles/index.scss'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import 'virtual:svg-icons-register'

useREM()

createApp(App).use(router).use(mLibs).mount('#app')
