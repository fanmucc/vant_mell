<template>
    <div class="goods-list">
      123
    </div>
</template>
<script>
import { Row, Col } from 'vant'
export default {
  name: 'goods',
  components: {
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
  }
</style>
