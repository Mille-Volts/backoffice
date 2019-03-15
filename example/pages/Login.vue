<template>
  <mv-authentication-layout>
    <h1>Bienvenue</h1>
    <mv-local-login/>
    <hr>
    <mv-guest-login name="Compte invité"/>
  </mv-authentication-layout>
</template>

<script>
export default {
  inject: ["application"],
  methods: {}
};
</script>
