//https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3
//import Vue from "vue";
import Sticky from "vue-sticky-directive";
import Element, { Row, Col } from "element-ui";
import Router from "vue-router";
import moment from "moment";

import AuthenticationLayout from "./layouts/AuthenticationLayout.vue";
import ContentLayout from "./layouts/ContentLayout.vue";
import PageLayout from "./layouts/PageLayout.vue";

import LocalLogin from "./authentication/LocalLogin.vue";
import GuestLogin from "./authentication/GuestLogin.vue";

import Application from "./Application.vue";
import AuthenticationProvider from "./AuthenticationProvider.vue";
import MvButton from "./Button.vue";
import DropDownAction from "./DropDownAction.vue";
import Icon from "./Icon.vue";
import MainMenu from "./MainMenu.vue";
import Panel from "./Panel.vue";

import MvForm from "./forms/Form.vue";
import FormColumn from "./forms/FormColumn.vue";
import FormItem from "./forms/FormItem.vue";
import FormGroup from "./forms/FormGroup.vue";
import FormRow from "./forms/FormRow.vue";
import FormInput from "./forms/FormInput.vue";
import FormSelect from "./forms/FormSelect.vue";
import FormUpload from "./forms/FormUpload.vue";
import UploadProvider from "./UploadProvider.vue";

import MvTable from "./tables/Table.vue";
import TableAction from "./tables/TableAction.vue";
import TableColumn from "./tables/TableColumn.vue";

moment.locale("fr");

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
    Vue.component("DropDownAction", DropDownAction);
    Vue.component("Icon", Icon);
    Vue.component("MainMenu", MainMenu);
    Vue.component("Panel", Panel);

    Vue.component("MvForm", MvForm);
    Vue.component("FormColumn", FormColumn);
    Vue.component("FormItem", FormItem);
    Vue.component("FormGroup", FormGroup);
    Vue.component("FormRow", FormRow);
    Vue.component("FormInput", FormInput);
    Vue.component("FormSelect", FormSelect);
    Vue.component("FormUpload", FormUpload);
    Vue.component("UploadProvider", UploadProvider);

    Vue.component("MvTable", MvTable);
    Vue.component("TableAction", TableAction);
    Vue.component("TableColumn", TableColumn);
  }
};
