import Vue from "vue";
import "./scss/theme.scss";

import Components, { generateRouter } from "./components/index";
import App from "./App.vue";
import routes from "./routes";
import store from "./store";

Vue.use(Components);

Vue.config.productionTip = false;

new Vue({
  router: generateRouter(routes),
  store,
  render: h => h(App)
}).$mount("#app");
