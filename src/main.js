import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css';
import router from './router'
import './permissions'
import axios from './plugins/axios_plugin'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$router = router
app.mount('#app')
