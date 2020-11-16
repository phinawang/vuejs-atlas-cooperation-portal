import Vue from "vue";
import App from "./App.vue";
import "./styles/index.css";
import VueRouter from "vue-router";
import PageNotFound from "./components/Page404.vue";
import audit from "./components/Audit.vue";
import usage from "./components/Usage.vue";

Vue.config.productionTip = false;

const routes = [
  { path: "/audit", component: audit },
  { path: "/usage", component: usage },
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
