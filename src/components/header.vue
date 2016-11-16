<template lang="html">
  <header class="header">
    <h3 class="title">Vugo</h3>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/doc">Doc</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less">
@import "~assets/style/_var.less";

.header{
  height: @header-height;
  background: @default-color;
  padding: 0 50px;
  display: flex;
  .title{
    line-height: @header-height;
    font-size: 26px;
    color: #fff;
  }
  .nav{
    flex: 1;
    text-align: right;
    font-size: 14px;
    line-height: @header-height;
    a{
      text-decoration: none;
      color: #fff;
      padding: 0 20px;
    }
  }
}
</style>
