import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import installElementPlus from './plugins/element';
import installIcons from './icons'; // icon
import installLodash from './plugins/lodash';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import './styles/global.scss'; // global css

import './permission';

const app = createApp(App);

// app.config.globalProperties.abc = 123;

// 注册第三方组件
installElementPlus(app);
installLodash(app);

// 注册全局组件
installIcons(app);

app.use(store).use(router).mount('#app');
