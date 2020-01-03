<template>
    <div class="goods-list">
        <layout-search class="header"></layout-search>
        <div>
            <van-tabs v-model="active">
                <van-tab title="首页">首页</van-tab>
                <van-tab title="男装">男装</van-tab>
                <van-tab title="饰品">饰品</van-tab>
                <van-tab title="食品">食品</van-tab>
                <van-tab title="生鲜">生鲜</van-tab>
                <van-tab title="手机">手机</van-tab>
                <van-tab title="百货">百货</van-tab>
                <van-tab title="女装">女装</van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import layoutSearch from '@/components/search'
import { Row, Col, Tab, Tabs } from 'vant'
export default {
  name: 'goods',
  components: {
    layoutSearch,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
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
