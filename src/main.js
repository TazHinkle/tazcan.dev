import { createApp } from 'vue'
import router from './router/index.js'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(router)
router.isReady().then(() => {
    app.mount('#app')
})
