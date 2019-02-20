<template>
  <authentication-layout>
    <h1>Bienvenue</h1>
    <local-login/>
    <hr>
    <guest-login name="Compte invité"/>
  </authentication-layout>
</template>

<script>
import { setUser } from "@/components/auth";

export default {
  inject: ["application"],
  methods: {}
};
</script>
