// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import Router from 'vue-router';
import 'font-awesome/css/font-awesome.min.css'

import Stall1 from './components/Stall1';
import Stall2 from './components/Stall2';

import '../main.css';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(Vuetify);

var router = new Router({
  routes: [
    { path: '/', redirect: '/stall1',
    },
    {
      path: '/stall1',
      component: Stall1,
    },
    {
      path: '/stall2',
      component: Stall2,
    }
  ]
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});
