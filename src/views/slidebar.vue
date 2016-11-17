<template lang="html">
  <div class="slide-bar">
    <ul class="menus menus--lv1">
      <li><h3>Document</h3></li>
      <li v-for="(val, key) in routerConfigs">
        {{key}}
        <ul class="menus menus--lv2">
          <li v-for="(v, k) in val">
            <router-link :to="'/doc' + k">{{v}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import routerConfigs from '../router.config';

export default {
  data() {
    return {
      routerConfigs,
    };
  },
};
</script>

<style lang="less">
.slide-bar{
  width: 300px;
  height: 100%;
  padding-top: 60px;
  color: #333;
  box-sizing: border-box;
  .menus{
    width: 100%;
    box-sizing: border-box;
    padding: 0 50px;
    text-align: left;
    li{
      list-style: none;
    }
  }
  .menus--lv1{
    &>li{
      font-size: 14px;
      padding: 10px 0;
    }
  }
  .menus--lv2{
    padding-left: 10px;
    padding-top: 5px;
    a{
      text-decoration: none;
      font-size: 12px;
      line-height: 24px;
      color: #333;
    }
  }
}
</style>
