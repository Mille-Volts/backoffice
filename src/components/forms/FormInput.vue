<template>
  <el-input v-bind="$attrs" v-on="$listeners">
    <template v-if="icon || iconLeft" v-slot:prefix>
      <span class="mv-formInput-iconContainer">
        <icon
          class="mv-formInput-icon mv-formInput-icon--left"
          :name="icon || iconLeft"
        />
      </span>
    </template>
    <slot></slot>
    <template v-if="iconRight" v-slot:suffix>
      <span class="mv-formInput-iconContainer">
        <icon
          class="mv-formInput-icon mv-formInput-icon--right"
          :name="iconRight"
        />
      </span>
    </template>
  </el-input>
</template>

<script>
import { Input as ElInput } from "element-ui";
import Icon from "../Icon.vue";

export default {
  name: "FormInput",
  components: {
    ElInput,
    Icon
  },
  props: {
    icon: String,
    iconLeft: String,
    iconRight: String
  }
};
</script>

<style lang="scss">
.mv-formInput {
  &-iconContainer {
    padding: 5px;
  }
}
</style>
