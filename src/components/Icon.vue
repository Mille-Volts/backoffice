<template>
  <i :class="`ti-${name}`" />
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: { type: String, required: true }
  }
};
</script>
