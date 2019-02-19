//https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router
import Router from "vue-router";
import { hasUser, getUser } from "./auth";

export function generateRouter(
  routes,
  options = { mode: "history", base: process.env.BASE_URL }
) {
  const router = new Router({
    routes,
    ...options
  });
  router.beforeEach((to, from, next) => {
    if (to.matched.some(({ meta }) => meta && meta.auth)) {
      if (!hasUser()) {
        // No user, redirect to /login page
        return next({
          name: "login",
          query: { next: to.fullPath }
        });
      }

      const user = getUser();
      const permissionsValid = to.matched.every(
        ({ meta }) =>
          !meta ||
          !meta.auth ||
          !meta.checkPermissions ||
          meta.checkPermissions(user)
      );

      if (!permissionsValid) {
        // If at least one auth route doesn't have the right permissions
        return next({
          name: "home",
          query: { page: to.fullPath, permissions: false }
        });
      }
    }

    if (to.matched.some(({ meta }) => meta && meta.guest)) {
      if (hasUser()) {
        // No user, redirect to /login page
        return next({
          name: "home",
          query: { page: to.fullPath, authenticated: false }
        });
      }
    }

    return next();
  });
  return router;
}
