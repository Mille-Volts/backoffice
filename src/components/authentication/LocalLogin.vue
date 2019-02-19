<template>
  <mv-form :model="data" @submit="tryLocalLogin" :disabled="isAuthenticating">
    <h2>Connexion locale</h2>
    <p>Utilisez votre identifiant et votre mot de passe pour accéder à l'interface d'administration.</p>
    <form-item label="Votre identifiant">
      <el-input type="text" placeholder="adresse@email.com" v-model="data.username"/>
    </form-item>
    <form-item label="Votre mot de passe">
      <el-input type="password" placeholder="******" v-model="data.password"/>
    </form-item>
    <mv-button type="submit" icon="check" :loading="isAuthenticating" primary>Connexion</mv-button>
  </mv-form>
</template>

<script>
export default {
  name: "LocalLogin",
  inject: ["authentication"],
  data() {
    return {
      isAuthenticating: false,
      data: {}
    };
  },
  methods: {
    async tryLocalLogin(data) {
      this.isAuthenticating = true;
      await this.authentication.tryLogin({ type: "local", ...data });
      this.isAuthenticating = false;
    }
  }
};
</script>
