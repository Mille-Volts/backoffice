<template>
  <authentication-provider>
    <application :routes="routes">
      <router-view></router-view>
    </application>
  </authentication-provider>
</template>

<script>
import routes from "./routes";

export default {
  data() {
    return { routes };
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
