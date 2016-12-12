<template lang="html">
  <div class="doc__page">
    <h3 class="doc__title">Checkbox 多选框</h3>
    <div class="doc__content">
      <v-checkbox>选项A</v-checkbox>
    </div>
    <br>
    <v-checkbox :checked="true">选项B</v-checkbox>
    <br>
    <v-checkbox :disabled="true" :checked="false">选项C</v-checkbox>
    <br>
    <v-checkbox :disabled="true" :checked="true">选项D</v-checkbox>
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
