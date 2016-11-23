<template lang="html">
  <label class="v-checkbox">
    <input class="v-checkbox__input" :checked="checked" :disabled="disabled" type="checkbox">
    <span class="v-checkbox__icon">
      <i class=""></i>
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    className: {
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
  data() {
    return {};
  },
};
</script>

<style lang="less">
label.v-checkbox{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  .v-checkbox__input{
    opacity: 0;
    outline: none !important;
    &:checked + .v-checkbox__icon i{
      border-color: #007aff;
      background: #007aff;
      &:after{
        background: no-repeat center;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E");
        background-size: 14px 10px;
      }
    }
    &:disabled+ .v-checkbox__icon i{
      border-color: #ddd;
      background: #eee;
      cursor: not-allowed;
    }
  }
  .v-checkbox__icon{
    display: flex;
    margin-right: 5px;
    i{
      width: 20px;
      height: 20px;
      border-radius: 2px;
      position: relative;
      border: 1px solid #ddd;
      box-sizing: border-box;
      &:after{
        content: ' ';
        position: absolute;
        left: 50%;
        margin-left: -6px;
        top: 50%;
        margin-top: -4px;
        width: 12px;
        height: 9px;
      }
    }
  }
}

</style>
