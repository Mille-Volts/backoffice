import Page from "./pages/Page.vue";
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
    component: Page,
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
            component: () => import("./pages/FormSimple.vue"),
            meta: {
              label: "Formulaire simple"
            }
          },
          {
            path: "complex",
            component: () => import("./pages/FormComplex.vue"),
            meta: {
              label: "Formulaire complexe"
            }
          }
        ]
      },
      {
        path: "/table",
        component: () => import("./pages/Tables.vue"),
        redirect: "/table/simple",
        meta: {
          label: "Tables",
          auth: true
        },
        children: [
          {
            path: "simple",
            component: () => import("./pages/TableSimple.vue"),
            meta: {
              label: "Tableau simple"
            }
          },
          {
            path: "complex",
            component: () => import("./pages/TableComplex.vue"),
            meta: {
              label: "Tableau complexe"
            }
          }
        ]
      }
    ]
  }
];
