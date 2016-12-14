<template lang="html">
  <div class="document page">
    <v-slidebar></v-slidebar>
    <div class="document-content">
      <router-view></router-view>
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
.document{
  display: flex;
  .document-content{
    flex: 1;
    display: flex;
    margin-top: 60px;
  }
}
</style>
