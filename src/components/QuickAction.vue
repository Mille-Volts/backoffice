<template>
  <div
    class="mv-quickAction"
    :class="{
      [`mv-quickAction--${computedType || 'standard'}`]: 1,
      'mv-quickAction--has-text': !!$slots.default,
      'mv-quickAction--has-icon': !!icon
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <mv-icon v-if="icon" class="mv-quickAction-icon" :name="icon" />
    <div v-if="$slots.default" class="mv-quickAction-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MvIcon from "./Icon.vue";

export default {
  name: "MvQuickAction",
  components: {
    MvIcon
  },
  props: {
    icon: String,
    primary: Boolean,
    success: Boolean,
    warning: Boolean,
    danger: Boolean
  },
  computed: {
    computedType() {
      switch (true) {
        case this.primary:
          return "primary";
        case this.success:
          return "success";
        case this.warning:
          return "warning";
        case this.danger:
          return "danger";
        default:
          return "";
      }
    }
  }
};
</script>

<style lang="scss">
@import "../theme/_variables.scss";

.mv-quickAction {
  text-align: center;
  &-icon {
    border: 2px solid $--color-text-secondary;
    border-radius: 100%;
    color: $--color-text-secondary;
    display: inline-block;
    font-size: 32px;
    .mv-quickAction--has-text & {
      margin-bottom: $--margin;
    }
    padding: 22px;
    .mv-quickAction--primary & {
      border-color: $--color-primary;
      color: $--color-primary;
    }
    .mv-quickAction--success & {
      border-color: $--color-success;
      color: $--color-success;
    }
    .mv-quickAction--warning & {
      border-color: $--color-warning;
      color: $--color-warning;
    }
    .mv-quickAction--danger & {
      border-color: $--color-danger;
      color: $--color-danger;
    }
  }
}
</style>
