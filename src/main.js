import Vue from 'vue'
import App from './App.vue'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

const app = createApp(App)
// app.use(VueAxios,axios);
app.use(ElementPlus)
app.mount('#app')
new Vue({
    el:'#app'
})
