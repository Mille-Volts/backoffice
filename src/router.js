import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/views/Dashboard.vue";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
