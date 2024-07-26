// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createAppRouter } from './router'

const app = createApp(App)
const pageLimit = [null, 1, 3, 2, 1] // *** null เป็น skip เพราะ page เริ่มที่ 1 *** //

app.use(createPinia())
app.use(createAppRouter(pageLimit))

app.mount('#app')