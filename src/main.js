import { createApp } from 'vue'
import App from './App.vue'
import router from '@/config/router'
import axios from '@/config/axios'

const app = createApp(App);
app.provide("axios",axios);
app.use(router)
    .mount('#app')
