import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locales/index.ts'
import router from '@/router/index.ts'
import '@/style/style.less'
import '@/style/reset.less'

import 'leaflet/dist/leaflet.css'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
