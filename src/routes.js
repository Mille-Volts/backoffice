import PageLayout from "@/components/layouts/PageLayout.vue";
import LoginPage from "./pages/Login.vue";

export default [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      label: "Connexion",
      guest: true
    }
  },
  {
    path: "/",
    component: PageLayout,
    meta: {
      root: true,
      auth: true
    },
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("./pages/Dashboard.vue"),
        meta: {
          label: "Tableau de bord"
        }
      },
      {
        path: "/form",
        component: () => import("./pages/Forms.vue"),
        redirect: "/form/simple",
        meta: {
          label: "Formulaires",
          auth: true
        },
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
    ]
  }
];
