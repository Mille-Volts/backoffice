<template>
  <div
    class="mv-stat"
    :class="{
      [`mv-stat--${computedType || 'standard'}`]: 1,
      'mv-stat--has-text': !!$slots.default,
      'mv-stat--has-icon': !!icon,
      'mv-stat--has-text-and-icon': !!icon && !!$slots.default,
      'mv-stat--has-badge': !!badge,
      'mv-stat--vertical': !!vertical
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="badgeAttrs">
      <template v-if="icon">
        <el-badge v-bind="badgeAttrs">
          <mv-icon v-if="icon" class="mv-stat-icon" :name="icon" />
        </el-badge>
        <div v-if="$slots.default" class="mv-stat-text">
          <slot></slot>
        </div>
      </template>
      <template v-else>
        <el-badge v-bind="badgeAttrs">
          <div v-if="$slots.default" class="mv-stat-text">
            <slot></slot>
          </div>
        </el-badge>
      </template>
    </template>
    <template v-else>
      <mv-icon v-if="icon" class="mv-stat-icon" :name="icon" />
      <div v-if="$slots.default" class="mv-stat-text">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import { Badge as ElBadge } from "element-ui";
import MvIcon from "./Icon.vue";

export default {
  name: "MvStat",
  components: {
    ElBadge,
    MvIcon
  },
  props: {
    icon: String,
    primary: Boolean,
    success: Boolean,
    warning: Boolean,
    danger: Boolean,
    vertical: Boolean,
    badge: [String, Number],
    badgeType: String,
    badgeMax: Number,
    badgeIsDot: Boolean,
    badgeHidden: Boolean
  },
  computed: {
    badgeAttrs() {
      if (!this.badge) return null;
      return {
        value: this.badge,
        type: this.badgeType,
        max: this.badgeMax,
        isDot: this.badgeIsDot,
        hidden: this.badgeHidden
      };
    },
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

.mv-stat {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  &--has-text-and-icon {
    flex-direction: row-reverse;
    flex: 1;
    justify-content: space-between;
    .mv-stat-text {
      text-align: left;
    }
  }
  &--has-icon {
    .el-badge {
      height: 32px;
    }
  }
  &--vertical {
    flex-direction: column;
    align-items: center;
    .mv-stat-text {
      text-align: center;
    }
    & .el-badge + .mv-stat-text,
    & .mv-stat-icon + .mv-stat-text {
      margin-top: 4px;
    }
  }
  &-text {
    flex: 1;
    font: font-default(1em, 16px);
    text-align: center;
    strong {
      display: block;
      font: font-default-bold(2em, 32px);
      height: 32px;
      white-space: nowrap;
      .mv-stat--primary & {
        color: $--color-primary;
      }
      .mv-stat--success & {
        color: $--color-success;
      }
      .mv-stat--danger & {
        color: $--color-danger;
      }
      .mv-stat--warning & {
        color: $--color-warning;
      }
      small {
        color: $--color-text-secondary;
        font: font-default(0.75em, 32px);
      }
    }
  }
  &-icon {
    flex: 0;
    font-size: 32px;
  }

  .el-badge__content.is-fixed {
    /* Otherwise it tends to go outside bounds */
    right: -15px;
    transform: translateY(-50%) translateX(0);
  }
}
</style>
