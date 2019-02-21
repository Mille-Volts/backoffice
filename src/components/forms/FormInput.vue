<template>
  <el-input v-bind="$attrs" v-on="$listeners">
    <template v-if="icon || iconLeft" v-slot:prefix>
      <span class="form-input_icon-container">
        <icon
          class="form-input_icon form-input_icon--left"
          :name="icon || iconLeft"
        />
      </span>
    </template>
    <slot></slot>
    <template v-if="iconRight" v-slot:suffix>
      <span class="form-input_icon-container">
        <icon
          class="form-input_icon form-input_icon--right"
          :name="iconRight"
        />
      </span>
    </template>
  </el-input>
</template>

<script>
import Icon from "../Icon.vue";

export default {
  name: "FormInput",
  components: {
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
.form-input {
  &_icon-container {
    padding: 5px;
  }
}
</style>
