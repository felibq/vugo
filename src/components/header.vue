<template lang="html">
  <header class="header">
    <h3 class="header__title">
      <router-link to="/"><i class="header__title--logo"></i>Vugo</router-link>
    </h3>
    <div class="header__nav">
      <router-link to="/">Home</router-link>
      <router-link to="/start">Get Started</router-link>
      <router-link to="/doc">Documentation</router-link>
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
  a{
    text-decoration: none;
    color: #fff;
  }
  .header__title{
    line-height: @header-height;
    font-size: 20px;
    color: #fff;
    .header__title--logo{
      display: inline-block;
      padding-left: @header-height;
      height: @header-height;
      background: url("~assets/vugo.png") center center no-repeat;
      background-size: @header-height - 18;
      float: left;
    }
  }
  .header__nav{
    flex: 1;
    text-align: right;
    font-size: 14px;
    font-weight: 600;
    line-height: @header-height;
    a{
      padding: 0 20px;
    }
  }
}
</style>
