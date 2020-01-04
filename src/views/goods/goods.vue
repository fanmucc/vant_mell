<template>
    <div class="goods-list">
        <layout-search class="header"></layout-search>
    </div>
</template>
<script>
import layoutSearch from '@/components/search'
import { Row, Col, Tab, Tabs, Icon } from 'vant'
export default {
  name: 'goods',
  components: {
    layoutSearch,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon
  },
  data () {
    return {
      logo: {
        img: require('../../assets/image/logo/F.png'),
        width: 30,
        height: 30,
        href: '#'
      },
      active: 0
    }
  },
  mounted () {
    //
  },
  methods: {
  }
}
</script>
<style lang="less">
  //
  .goods-list {
    height: 100vh;
    .header {
      background: rgb(255, 255, 255);
      height: 54px;
      .van-col {
        &:nth-child(1) {
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>
