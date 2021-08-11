import { createApp } from 'vue'
import App from './App.vue'

import './assets/fontawesome/css/all.min.css';
import './assets/main.css';
import './assets/script';
import router from './router'
import VueSelect from "vue-next-select";
import 'vue-next-select/dist/index.css'

const app = createApp(App);
app.component('vue-select', VueSelect);
app.use(router);

app.mount('#app');

