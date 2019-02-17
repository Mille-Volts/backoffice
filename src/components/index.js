//https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3
import Vue from "vue";
import Element, { Row, Col } from "element-ui";

Vue.use(Element);
Vue.component("row", Row);
Vue.component("column", Col);
