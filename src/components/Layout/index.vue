<template>
    <div class="layout">
        <router-view class="content"/>
        <layout-tab class="foot"></layout-tab>
    </div>
</template>
<script>

import layoutTab from './components/footTab'
export default {
  name: 'layout',
  components: {
    layoutTab
  }
}
</script>
<style lang="less">
  .layout {
    max-height: 100vh;
    .content {
      height: 90vh;
    }
    .foot {
      height: 10vh;
    }
  }
</style>
