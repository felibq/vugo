<template lang="html">
<!--   <div class="">
    <label class="switch-label">
      <input type="checkbox" class="v-switch switch-anim">
      <span>带动画过渡效果</span>
    </label>
  </div> -->
  <label class="switch-label">
    <input type="checkbox" class="v-switch" :class="animateClass" :checked="checked" :disabled="disabled">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'v-switch',
  props: {
    animate: {
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
    animateClass() {
      return `v-switch-${this.animate}`;
    },
  },
};
</script>

<style lang="less">
  @import url('../../less/components/switch.less');
</style>
