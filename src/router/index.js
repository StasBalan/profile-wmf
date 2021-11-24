import Vue from "vue";
import VueRouter from "vue-router";
// import { publicPath } from '../../vue.config'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: location.pathname,
  routes,
});

export default router;
