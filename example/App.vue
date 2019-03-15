<template>
  <mv-authentication-provider>
    <mv-application :routes="routes">
      <mv-upload-provider v-bind="uploadProviderAttrs">
        <router-view></router-view>
      </mv-upload-provider>
    </mv-application>
  </mv-authentication-provider>
</template>

<script>
import routes from "./routes";

export default {
  data() {
    return { routes };
  },
  computed: {
    uploadProviderAttrs() {
      return {};
    }
  },
  methods: {
    // async tryLogin({ type, ...data }) {
    //   switch (type) {
    //     case "local":
    //       return new Promise((resolve, reject) => {
    //         window.setTimeout(() => {
    //           resolve({ name: "Camille VAULTIER", icon: "badge" });
    //         }, 1000);
    //       });
    //   }
    // }
  }
};
</script>
