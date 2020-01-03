<template>
    <div class="layout-tab">
        <van-grid clickable :column-num="5" border>
            <van-grid-item icon="home-o" text="首页" to="/" />
            <van-grid-item icon="search" text="分类" url="/vant/mobile.html" />
            <van-grid-item icon="search" text="消息" url="/vant/mobile.html" />
            <van-grid-item icon="search" text="购物车" url="/vant/mobile.html" />
            <van-grid-item icon="search" text="个人中心" url="/vant/mobile.html" />
        </van-grid>
    </div>
</template>
<script>
import { Grid, GridItem } from 'vant'
export default {
  name: 'layoutTab',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  }
}
</script>
<style lang="less">
  .layout-tab {
    height: 100%;
    .van-grid {
      height: 100%;
      .van-grid-item {
        height: 100%;
      }
    }
  }
</style>
