import Vue from "vue";
import VueRouter from "vue-router";
import ProfileRoutes from "./profileRoutes.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  ...ProfileRoutes
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
