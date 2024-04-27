import Vue from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@/style/index.less';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
