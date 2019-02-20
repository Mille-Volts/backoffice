<template>
  <authentication-layout>
    <h1>Bienvenue</h1>
    <local-login />
    <hr />
    <guest-login name="Compte invité" />
  </authentication-layout>
</template>

<script>
export default {
  inject: ["application"],
  methods: {}
};
</script>
