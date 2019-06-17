<template>
  <i :class="`mv-icon ti-${name}`" />
</template>

<script>
export default {
  name: "MvIcon",
  props: {
    name: { type: String, required: true }
  }
};
</script>
