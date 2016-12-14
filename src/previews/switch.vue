<template lang="html">
  <div class="doc__page">
    <h2 class="doc__name">Switch 开关</h2>
    <div class="doc__content">
      <h3 class="doc__title">基本用法</h3>
      <v-switch>默认效果</v-switch>
    </div>
    <div class="doc__content">
      <h3 class="doc__title">动画效果</h3>
      <v-switch animate="tran">带动画过渡效果</v-switch>
      <br>
      <v-switch animate="bg">带背景过渡效果</v-switch>
      <br>
    </div>
    <div class="doc__content">
      <h3 class="doc__title">禁用状态(待完成)</h3>
      <v-switch :disabled="true" :checked="true">开启状态</v-switch>
      <br> 
      <v-switch :disabled="true" :checked="false">关闭状态</v-switch>
      <br>
    </div>
    <div class="doc__content">
      <h3 class="doc__title">属性</h3>
      <table class="doc__table">
        <thead>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr>
            <td>checked</td>
            <td>选中状态</td>
            <td>Boolean</td>
            <td>无</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>只读状态</td>
            <td>Boolean</td>
            <td>无</td>
            <td>false</td>
          </tr>
          <tr>
            <td>animate</td>
            <td>动画效果</td>
            <td>String</td>
            <td>
              <span>tran:动画过渡</span>
              <br>
              <span>bg:背景过渡</span>
            </td>
            <td>空</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import vSwitch from 'packages/switch/switch';

export default {
  data() {
    return {};
  },
  components: {
    vSwitch,
  },
};
</script>

<style lang="less">
</style>
