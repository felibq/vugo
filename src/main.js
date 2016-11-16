import Vue from 'vue';
import VueRouter from 'vue-router';

import routersConfig from './routers';
import App from './App';

Vue.use(VueRouter);

const router = new VueRouter(routersConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
