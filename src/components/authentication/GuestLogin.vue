<template>
  <mv-form :disabled="isAuthenticating" @submit="tryLocalLogin">
    <h2>Connexion invité</h2>
    <p>Connectez-vous à l'interface avec un accès invité.</p>
    <mv-button type="submit" icon="user" :loading="isAuthenticating" primary
      >Entrer sans connexion</mv-button
    >
  </mv-form>
</template>

<script>
import MvButton from "../Button.vue";
import MvForm from "../forms/Form.vue";

export default {
  name: "GuestLogin",
  inject: ["authentication"],
  components: {
    MvButton,
    MvForm
  },
  props: {
    name: { type: String, default: "Guest" }
  },
  data() {
    return {
      isAuthenticating: false
    };
  },
  methods: {
    async tryLocalLogin() {
      this.isAuthenticating = true;
      await this.authentication.login({
        type: "guest",
        name: this.name
      });
      this.isAuthenticating = false;
    }
  }
};
</script>
