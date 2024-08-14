// import './assets/main.css'

import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'nprogress/nprogress.css'
import { createAppRouter } from './router'
import { inject } from '@vercel/analytics'

const app = createApp(App)
const pageLimit = [null, 1, 1, 2, 2] 

inject()
app.use(createPinia())
app.use(createAppRouter(pageLimit))

app.mount('#app')