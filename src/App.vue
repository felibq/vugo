<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from 'components/header';

export default {
  name: 'app',
  components: {
    vHeader,
  },
};
</script>

<style lang="less">
@import "~assets/style/index.less";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
