<template>
    <div class="small-logo" :style="{'height': imgs.height, 'width': imgs.width}">
        <van-image
            :width="imgs.width"
            :height="imgs.height"
            :src="imgs.img"
        />
    </div>
</template>
<script>
import { Image } from 'vant'
export default {
  name: 'logoImg',
  props: {
    img: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    imgs () {
      console.log(this.img)
      return this.img
    }
  },
  components: {
    [Image.name]: Image
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .small-logo {
    margin: 0;
    padding: 0;
    height: 35px;
  }
</style>
