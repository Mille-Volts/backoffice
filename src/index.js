//https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3
//import Vue from "vue";
import Sticky from "vue-sticky-directive";
import { Row, Col } from "element-ui";
import Router from "vue-router";
import moment from "moment";

import AuthenticationLayout from "./components/layouts/AuthenticationLayout.vue";
import ContentLayout from "./components/layouts/ContentLayout.vue";
import PageLayout from "./components/layouts/PageLayout.vue";

import LocalLogin from "./components/authentication/LocalLogin.vue";
import GuestLogin from "./components/authentication/GuestLogin.vue";

import Application from "./components/Application.vue";
import AuthenticationProvider from "./components/AuthenticationProvider.vue";
import MvButton from "./components/Button.vue";
import DropDownAction from "./components/DropDownAction.vue";
import Icon from "./components/Icon.vue";
import MainMenu from "./components/MainMenu.vue";
import Panel from "./components/Panel.vue";

import MvForm from "./components/forms/Form.vue";
import FormColumn from "./components/forms/FormColumn.vue";
import FormItem from "./components/forms/FormItem.vue";
import FormGroup from "./components/forms/FormGroup.vue";
import FormRow from "./components/forms/FormRow.vue";
import FormInput from "./components/forms/FormInput.vue";
import FormSelect from "./components/forms/FormSelect.vue";
import FormUpload from "./components/forms/FormUpload.vue";
import UploadProvider from "./components/UploadProvider.vue";

import MvTable from "./components/tables/Table.vue";
import TableAction from "./components/tables/TableAction.vue";
import TableColumn from "./components/tables/TableColumn.vue";

moment.locale("fr");

export * from "./util/auth";
export * from "./util/router";
export * from "./theme/index.scss";

export default {
  install: function(Vue) {
    Vue.use(Router);
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
