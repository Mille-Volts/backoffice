//https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3
//import Vue from "vue";
import Sticky from "vue-sticky-directive";
import { Col } from "element-ui";
import Router from "vue-router";
import moment from "moment";

import MvAuthenticationLayout from "./components/layouts/AuthenticationLayout.vue";
import MvContentLayout from "./components/layouts/ContentLayout.vue";
import MvPageLayout from "./components/layouts/PageLayout.vue";

import MvLocalLogin from "./components/authentication/LocalLogin.vue";
import MvGuestLogin from "./components/authentication/GuestLogin.vue";
import MvAuthenticationProvider from "./components/authentication/AuthenticationProvider.vue";

import MvApplication from "./components/Application.vue";
import MvButton from "./components/Button.vue";
import MvDropDownAction from "./components/DropDownAction.vue";
import MvBlock from "./components/Block.vue";
import MvInlineBlock from "./components/InlineBlock.vue";
import MvIcon from "./components/Icon.vue";
import MvMainMenu from "./components/MainMenu.vue";
import MvPanel from "./components/Panel.vue";
import MvQuickAction from "./components/QuickAction.vue";
import MvStat from "./components/Stat.vue";

import MvForm from "./components/forms/Form.vue";
import MvFormColumn from "./components/forms/FormColumn.vue";
import MvFormItem from "./components/forms/FormItem.vue";
import MvFormGroup from "./components/forms/FormGroup.vue";
import MvFormRow from "./components/forms/FormRow.vue";
import MvFormInput from "./components/forms/FormInput.vue";
import MvFormSelect from "./components/forms/FormSelect.vue";
import MvFormUpload from "./components/forms/FormUpload.vue";
import MvUploadProvider from "./components/forms/UploadProvider.vue";
import MvFormDialog from "./components/forms/FormDialog.vue";

import MvTable from "./components/tables/Table.vue";
import MvTableAction from "./components/tables/TableAction.vue";
import MvTableColumn from "./components/tables/TableColumn.vue";

import Row from "./components/Row.vue";

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

    Vue.component("MvAuthenticationLayout", MvAuthenticationLayout);
    Vue.component("MvContentLayout", MvContentLayout);
    Vue.component("MvPageLayout", MvPageLayout);

    Vue.component("MvLocalLogin", MvLocalLogin);
    Vue.component("MvGuestLogin", MvGuestLogin);

    Vue.component("MvApplication", MvApplication);
    Vue.component("MvAuthenticationProvider", MvAuthenticationProvider);
    Vue.component("MvButton", MvButton);
    Vue.component("MvDropDownAction", MvDropDownAction);
    Vue.component("MvBlock", MvBlock);
    Vue.component("MvIcon", MvIcon);
    Vue.component("MvInlineBlock", MvInlineBlock);
    Vue.component("MvMainMenu", MvMainMenu);
    Vue.component("MvPanel", MvPanel);
    Vue.component("MvQuickAction", MvQuickAction);
    Vue.component("MvStat", MvStat);

    Vue.component("MvForm", MvForm);
    Vue.component("MvFormColumn", MvFormColumn);
    Vue.component("MvFormItem", MvFormItem);
    Vue.component("MvFormGroup", MvFormGroup);
    Vue.component("MvFormRow", MvFormRow);
    Vue.component("MvFormInput", MvFormInput);
    Vue.component("MvFormSelect", MvFormSelect);
    Vue.component("MvFormUpload", MvFormUpload);
    Vue.component("MvUploadProvider", MvUploadProvider);
    Vue.component("MvFormDialog", MvFormDialog);

    Vue.component("MvTable", MvTable);
    Vue.component("MvTableAction", MvTableAction);
    Vue.component("MvTableColumn", MvTableColumn);
  }
};
