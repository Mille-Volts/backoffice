<template>
  <authentication-provider @login="tryLogin" @logout="tryLogout">
    <application :routes="routes">
      <router-view></router-view>
    </application>
  </authentication-provider>
</template>

<script>
import routes from "./routes";

export default {
  data() {
    // const user = getUser();
    return { routes };
  },
  methods: {
    async tryLogin(connectionInfo) {
      switch (connectionInfo.type) {
        case "local":
          return new Promise((resolve, reject) => {
            window.setTimeout(() => {
              resolve({ firstname: "Camille", lastname: "Vaultier" });
            }, 1000);
          });
      }
    },
    async tryLogout() {}
  }
};
</script>
