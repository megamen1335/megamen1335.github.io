import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ми зараз його створимо
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Підключаємо твої стилі
import './assets/css/header.css'
import './assets/css/middle.css'
import './assets/css/footer.css'
import './assets/css/responsive.css'

const app = createApp(App)
app.use(router)
app.mount('#app')