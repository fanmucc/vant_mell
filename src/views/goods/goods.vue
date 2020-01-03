<template>
    <div class="goods-list">
        <layout-search class="header"></layout-search>
    </div>
</template>
<script>
import layoutSearch from '@/components/search'
import { Row, Col } from 'vant'
export default {
  name: 'goods',
  components: {
    layoutSearch,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data () {
    return {
      logo: {
        img: require('../../assets/image/logo/F.png'),
        width: 30,
        height: 30,
        href: '#'
      }
    }
  }
}
</script>
<style lang="less">
  //
  .goods-list {
    height: 100vh;
    .header {
      height: 7vh;
    }
  }
</style>
