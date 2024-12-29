import { createApp } from 'vue'
import App from './App.vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import router from '@/config/router'
import axios from '@/config/axios'

const app = createApp(App);
app.provide("axios",axios);

app.use(router)
    .use(Layui)
    .mount('#app')
