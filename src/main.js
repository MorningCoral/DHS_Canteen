// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import "font-awesome/css/font-awesome.min.css";
import Router from "vue-router";
import { routerHistory, writeHistory } from "vue-router-back-button";

import App from "./App";
import store from "./store";
import Search from "./components/SearchPage";
import Foodcart from "./components/FoodCart";
import Stall1 from "./components/Stall1";
import Stall2 from "./components/Stall2";

import "../main.css";

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(routerHistory);
Vue.use(Vuetify);

var router = new Router({
  routes: [
    { path: "/", redirect: "/stall1" },
    { path: "/stall1", component: Stall1 },
    { path: "/stall2", component: Stall2 },

    { path: "/search", component: Search },
    { path: "/foodcart", component: Foodcart }
  ]
});

router.afterEach(writeHistory);

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  store,
  router
});
