<template>
  <mv-form @submit="tryLocalLogin" :disabled="isAuthenticating">
    <h2>Connexion invité</h2>
    <p>Connectez-vous à l'interface avec un accès invité.</p>
    <mv-button type="submit" icon="person" :loading="isAuthenticating" primary>Entrer sans connexion</mv-button>
  </mv-form>
</template>

<script>
export default {
  name: "GuestLogin",
  inject: ["authentication"],
  props: {
    name: { type: String, default: "Guest" }
  },
  data() {
    return {
      isAuthenticating: false
    };
  },
  methods: {
    async tryLocalLogin(data) {
      this.isAuthenticating = true;
      await this.authentication.tryLogin({ type: "guest", name: this.name });
      this.isAuthenticating = false;
    }
  }
};
</script>
