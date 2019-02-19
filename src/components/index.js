//https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3
//import Vue from "vue";
import Sticky from "vue-sticky-directive";
import Element, { Row, Col } from "element-ui";
import Router from "vue-router";

import AuthenticationLayout from "./layouts/AuthenticationLayout.vue";
import ContentLayout from "./layouts/ContentLayout.vue";
import PageLayout from "./layouts/PageLayout.vue";

import LocalLogin from "./authentication/LocalLogin.vue";
import GuestLogin from "./authentication/GuestLogin.vue";

import Application from "./Application.vue";
import AuthenticationProvider from "./AuthenticationProvider.vue";
import MvButton from "./Button.vue";
import MvForm from "./Form.vue";
import FormColumn from "./FormColumn.vue";
import FormItem from "./FormItem.vue";
import FormGroup from "./FormGroup.vue";
import FormRow from "./FormRow.vue";
import Icon from "./Icon.vue";
import MainMenu from "./MainMenu.vue";
import Panel from "./Panel.vue";

export * from "./auth";
export * from "./router";

export default {
  install: function(Vue) {
    Vue.use(Router);
    Vue.use(Element);
    Vue.use(Sticky);

    Vue.component("row", Row);
    Vue.component("column", Col);

    Vue.component("AuthenticationLayout", AuthenticationLayout);
    Vue.component("ContentLayout", ContentLayout);
    Vue.component("PageLayout", PageLayout);

    Vue.component("LocalLogin", LocalLogin);
    Vue.component("GuestLogin", GuestLogin);

    Vue.component("Application", Application);
    Vue.component("AuthenticationProvider", AuthenticationProvider);
    Vue.component("MvButton", MvButton);
    Vue.component("MvForm", MvForm);
    Vue.component("FormColumn", FormColumn);
    Vue.component("FormItem", FormItem);
    Vue.component("FormGroup", FormGroup);
    Vue.component("FormRow", FormRow);
    Vue.component("Icon", Icon);
    Vue.component("MainMenu", MainMenu);
    Vue.component("Panel", Panel);
  }
};
