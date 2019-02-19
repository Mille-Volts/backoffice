//https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router
export const USER_LOCALSTORAGE_KEY = "auth_user";

export function hasUser() {
  return !!localStorage.getItem(USER_LOCALSTORAGE_KEY);
}
export function setUser(user) {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}
export function getUser() {
  return hasUser()
    ? JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY))
    : null;
}
export function unsetUser() {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}
