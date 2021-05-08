import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/icons'; // icon
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import installElementPlus from './plugins/element';
import '@/styles/global.scss'; // global css

const app = createApp(App);

// 第三方组件
installElementPlus(app);

app.use(store).use(router).mount('#app');
