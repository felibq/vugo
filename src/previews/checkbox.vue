<template lang="html">
  <div class="">
    <h1>Checkbox</h1>
    <v-checkbox>选项A</v-checkbox>
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
