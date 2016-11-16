<template lang="html">
  <div class="doc page">
    <v-slidebar></v-slidebar>
    <div class="doc-content">
      <h1>Doc Content</h1>
    </div>
  </div>
</template>

<script>
import vSlidebar from 'components/slidebar';

export default {
  data() {
    return {};
  },
  components: {
    vSlidebar,
  },
};
</script>

<style lang="less">
.doc{
  display: flex;
  .doc-content{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
