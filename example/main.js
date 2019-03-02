import Vue from "vue";
import Element from "element-ui";

import "../src/theme/index.scss";

import Components, { generateRouter } from "../src/index";
import App from "./App.vue";
import routes from "./routes";
import store from "./store";

Vue.use(Element);
Vue.use(Components);

Vue.config.productionTip = false;

new Vue({
  router: generateRouter(routes),
  store,
  render: h => h(App)
}).$mount("#app");
