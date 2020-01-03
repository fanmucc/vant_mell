<template>
    <div class="layout-tab">
        <van-tabbar v-model="active"  @change="handleTabPush">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/classification">分类</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/news">消息</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/personal">个人中心</van-tabbar-item>
        </van-tabbar>
        <!-- <van-grid clickable :column-num="5" center icon-size="20">
            <van-grid-item icon="home-o" text="首页" to="/" />
            <van-grid-item icon="search" text="分类" to="/classification" />
            <van-grid-item icon="search" text="消息" to="/news" />
            <van-grid-item icon="search" text="购物车" to="/cart" />
            <van-grid-item icon="search" text="个人中心" to="/personal" />
        </van-grid> -->
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'layoutTab',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleTabPush (index) {
      console.log(index)
    }
  }
}
</script>
<style lang="less">
  .van-tabbar {
    height: 8vh;
  }
</style>
