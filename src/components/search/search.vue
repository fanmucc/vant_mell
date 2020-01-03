<template>
    <div class="layout-search">
        <van-row>
            <van-col span="3">
                <logo-img :img="logo"/>
            </van-col>
            <van-col span="21">
                <van-search
                  label
                  v-model="value"
                ></van-search>
            </van-col>
        </van-row>
    </div>
</template>
<script>
import logoImg from '@/components/logo'
import { Row, Col, Search } from 'vant'
export default {
  name: 'layoutSearch',
  components: {
    logoImg,
    [Row.name]: Row,
    [Col.name]: Col,
    [Search.name]: Search
  },
  data () {
    return {
      logo: {
        img: require('@/assets/image/logo/F.png'),
        width: 35,
        height: 35,
        href: '#'
      },
      value: '鞋子'
    }
  }
}
</script>
<style lang="less">
  //
  .layout-search {
    margin: 0;
    padding: 0;
    height: 100%;
    background: rgb(255, 255, 255);
    .van-row {
      margin: 0;
      padding: 0;
      height: 100%;
      .van-col {
        height: 100%;
        &:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .van-search {
          height: 100%;
        }
      }
    }
  }
</style>
