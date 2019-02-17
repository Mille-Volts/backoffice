import Vue from "vue";
import Element, { Row, Col } from "element-ui";
import "./scss/theme.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Element);
Vue.component("row", Row);
Vue.component("column", Col);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
