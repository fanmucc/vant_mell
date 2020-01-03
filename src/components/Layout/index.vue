<template>
    <div class="layout">
        <layout-search class="header"></layout-search>
        <router-view class="content"/>
        <layout-tab class="foot"></layout-tab>
    </div>
</template>
<script>
import layoutSearch from './components/header'
import layoutTab from './components/footTab'
export default {
  name: 'layout',
  components: {
    layoutSearch,
    layoutTab
  }
}
</script>
<style lang="less">
  .layout {
    height: 100vh;
    .header {
      height: 7vh;
    }
    .content {
      height: 85vh;
    }
    .foot {
      height: 8vh;
    }
  }
</style>
