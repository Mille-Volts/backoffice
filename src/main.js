import Vue from "vue";
import "./scss/theme.scss";

import Components from "./components/index";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Components);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
