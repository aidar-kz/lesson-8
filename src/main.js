import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.config.globalProperties.blogURL = "http://localhost:5000/posts"
app.config.globalProperties.$log = console.log

app.mount('#app')
