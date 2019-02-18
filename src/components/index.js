//https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3
//import Vue from "vue";
import Sticky from "vue-sticky-directive";
import Element, { Row, Col } from "element-ui";

import Application from "./Application.vue";
import MvButton from "./Button.vue";
import ContentLayout from "./ContentLayout.vue";
import MvForm from "./Form.vue";
import FormColumn from "./FormColumn.vue";
import FormGroup from "./FormGroup.vue";
import FormRow from "./FormRow.vue";
import MainMenu from "./MainMenu.vue";
import PageLayout from "./PageLayout.vue";
import Panel from "./Panel.vue";

export default {
  install: function(Vue) {
    Vue.use(Element);
    Vue.use(Sticky);

    Vue.component("row", Row);
    Vue.component("column", Col);

    Vue.component("Application", Application);
    Vue.component("MvButton", MvButton);
    Vue.component("ContentLayout", ContentLayout);
    Vue.component("MvForm", MvForm);
    Vue.component("FormColumn", FormColumn);
    Vue.component("FormGroup", FormGroup);
    Vue.component("FormRow", FormRow);
    Vue.component("MainMenu", MainMenu);
    Vue.component("PageLayout", PageLayout);
    Vue.component("Panel", Panel);
  }
};
