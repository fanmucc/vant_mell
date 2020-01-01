<template>
    <div v-if="sizes" class="logoF">
        <div class="logoBox">
            <div contenteditable="true" class="logo logoBg">Fanmu</div>
        </div>
    </div>
    <div v-else class="small-logo">
        <van-image
            width="30px"
            height="30px"
            :src="imgs"
        />
    </div>
</template>
<script>
import { Image } from 'vant'
export default {
  name: 'logoImg',
  props: {
    size: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: ''
    }
  },
  computed: {
    sizes () {
      return this.size
    },
    imgs () {
      return this.img
    }
  },
  components: {
    [Image.name]: Image
  },
  mounted () {
console.log(this.img)
  }
}
</script>
<style lang="less">
    .logoF {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logoBox {
        display: inline-block;
        position: fixed;
        margin: 0 auto;
        left: auto;
        right: auto;
        margin-top: 30vh;
        /* top: 50px;
        right: calc(50% - 50px);
        width: 100px; */
        z-index: 999999;
    }
    .logoBg {
        width:100%;
        height:100%;
        background: url("../../assets/image/logo/LogoBackgroundImg.png") #333;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: cover;
        animation: 10s infinite linear animate;
        font-size: 50px;
    }
    .logoBg:before {
        content:"";
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        /* background-color: #999; */
        z-index: -1;
    }

    .header {
        background-color: #fff;
        text-align: center;
        margin: 0;
        padding: 2rem 0;
        width: 100vw;
    }
    .header-content {
        padding: 0.1px;
        margin: 0;
    }
    .header-content-text {
        text-align: center;
        padding-top: 170px;
    }
    .header-h1 {
        font-family: "New Hero", Icons /*!Persona*/;
        font-style: normal;
        font-weight: 700;
        padding: 0;
        margin: 0;
        font-size: 1.9rem;
        line-height: 1.3;
        color: rgb(145, 145, 145);
    }
    @keyframes animate {
        0% {
            background-position:0;
        }
        100% {
            background-position:-1000px 0;
        }
    }
</style>
