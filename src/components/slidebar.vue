<template lang="html">
  <div class="slide-bar">
    <ul class="menus menus--lv1">
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
  width: 280px;
  height: 100%;
  background: #f5f5f5;
  padding-top: 30px;
  box-sizing: border-box;
  .menus{
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    text-align: left;
    li{
      line-height: 35px;
      list-style: none;
    }
  }
  .menus--lv1{
    &>li{
      color: #666;
    }
  }
  .menus--lv2{
    padding-left: 20px;
    a{
      text-decoration: none;

    }
  }
}
</style>
