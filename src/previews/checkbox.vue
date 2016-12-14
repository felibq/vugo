<template lang="html">
  <div class="doc__page">
    <h2 class="doc__name">Checkbox 多选框</h2>
    <div class="doc__content">
      <h3 class="doc__title">基本用法</h3>
      <v-checkbox>篮球</v-checkbox>
      <br>
      <v-checkbox :checked="true">羽毛球</v-checkbox>
    </div>
    <div class="doc__content">
      <h3 class="doc__title">禁用状态</h3>
      <v-checkbox :disabled="true" :checked="false">足球</v-checkbox>
      <br>
      <v-checkbox :disabled="true" :checked="true">乒乓球</v-checkbox>
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
            <td>选中的状态</td>
            <td>Boolean</td>
            <td>无</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import vCheckbox from 'packages/checkbox/index';

export default {
  data() {
    return {};
  },
  components: {
    vCheckbox,
  },
};
</script>

<style lang="css">
</style>
