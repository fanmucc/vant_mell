<template>
    <div>
        <van-row>
            <van-col span="8"><logo-img :size="logo" :img="img"/></van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
        </van-row>
    </div>
</template>
<script>
import logoImg from '@/components/logo'
import { Row, Col } from 'vant'
export default {
  name: 'goods',
  components: {
    logoImg,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data () {
    return {
      logo: false,
      img: '../../assets/image/logo/F.png'
    }
  }
}
</script>
<style lang="less">
  //
</style>
