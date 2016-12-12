<template lang="html">
  <label class="v-checkbox" :class="typeClass">
    <input class="v-checkbox__input" :checked="checked" :disabled="disabled" type="checkbox">
    <span class="v-checkbox__icon">
      <i class=""></i>
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'v-checkbox',
  props: {
    type: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeClass() {
      return `v-checkbox--${this.type}`;
    },
  },
};
</script>

<style lang="less">
@import "../../less/components/checkbox.less";
</style>
