<template>
  <mv-form :model="data" @submit="tryLocalLogin" :disabled="isAuthenticating">
    <h2>Connexion locale</h2>
    <p>Utilisez votre identifiant et votre mot de passe pour accéder à l'interface d'administration.</p>
    <form-item label="Votre identifiant" required>
      <el-input type="text" placeholder="adresse@email.com" v-model="data.username" required/>
    </form-item>
    <form-item label="Votre mot de passe" required>
      <el-input type="password" placeholder="******" v-model="data.password" required/>
    </form-item>
    <mv-button type="submit" icon="lock" :loading="isAuthenticating" success>Connexion</mv-button>
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
