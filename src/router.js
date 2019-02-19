import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "Tableau de bord",
    component: () => import("./pages/Dashboard.vue")
  },
  {
    path: "/form",
    name: "Formulaires",
    component: () => import("./pages/Forms.vue"),
    redirect: "/form/simple",
    children: [
      {
        path: "simple",
        name: "Simple",
        component: () => import("./pages/FormSimple.vue")
      },
      {
        path: "complex",
        name: "Complexe",
        component: () => import("./pages/FormSimple.vue")
      }
    ]
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
