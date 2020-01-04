<template>
    <div class="goods-list">
        <layout-search class="header"></layout-search>
        <!-- <div class="tabs">
            <van-tabs v-model="active">
                <van-tab title="首页"></van-tab>
                <van-tab title="男装"></van-tab>
                <van-tab title="饰品"></van-tab>
                <van-tab title="食品"></van-tab>
                <van-tab title="生鲜"></van-tab>
                <van-tab title="手机"></van-tab>
                <van-tab title="百货"></van-tab>
                <van-tab title="女装"></van-tab>
            </van-tabs>
            <div class="good-all-icon">
              <van-icon name="qr-invalid" />
            </div>
        </div> -->
        <div class="tabs-box">
          <ul class="tabs-ul">
            <li class="tabs-li active">
              首页
            </li>
            <li class="tabs-li">
              男装
            </li>
            <li class="tabs-li">
              饰品
            </li>
            <li class="tabs-li">
              食品
            </li>
            <li class="tabs-li">
              生鲜
            </li>
            <li class="tabs-li">
              手机
            </li>
            <li class="tabs-li">
              百货
            </li>
            <li class="tabs-li">
              女装
            </li>
            <li class="tabs-li">
              手机
            </li>
            <li class="tabs-li">
              百货
            </li>
            <li class="tabs-li">
              女装
            </li>
          </ul>
          <div class="tabs-shadow"></div>
        </div>
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
    // document.querySelector('.tabs-box').addEventListener('touchmove', (e) => {
    //   console.log(e)
    // })
    let common_kit__list = document.querySelector('.tabs-ul')
    let startPosition, commonkitLeft, endPosition, deltaX, moveLength
    document.querySelector('.tabs-box').addEventListener('touchstart', function (e) {
      console.log(common_kit__list.style.left)
      e.stopPropagation()
      commonkitLeft = parseInt(common_kit__list.style.left = common_kit__list.style.left == '' ? 0 : common_kit__list.style.left)
      var touch = e.targetTouches[0] // targetTouches位于当前DOM元素上的手指动作的列表
      startPosition = { // 取屏幕上第一个手指相对于页面的坐标
        x: touch.pageX,
        y: touch.pageY
      }
    })

    document.querySelector('.tabs-box').addEventListener('touchmove', function (e) {
      e.stopPropagation()
      var touch = e.targetTouches[0]
      endPosition = {
        x: touch.pageX,
        y: touch.pageY
      }
      deltaX = endPosition.x - startPosition.x // 移动到最后的坐标x - 开始时的坐标x
      moveLength = Math.abs(deltaX) // 获得移动的x方向的距离
      var swipeLeft = () => {
        if (deltaX < (-30)) { // 这里以30作为判断是否触发、如果deltaX小于-30，说明向左移动
          console.log(1)
          if (Math.abs(commonkitLeft) + moveLength > (common_kit__list.offsetWidth - window.innerWidth)) { // 判断临界值
            common_kit__list.style.left = window.innerWidth - common_kit__list.offsetWidth + 'px'
            common_kit__list.style.transtion = `left 0.3s`
            console.log(common_kit__list.style.left, 'common_kit__list.style.left')
          } else {
            console.log(commonkitLeft, moveLength)
            common_kit__list.style.left = commonkitLeft - moveLength + 'px' // 上一次的left值-移动的距离（由于距离是正数，而向左移动left值是负数，所以用-）
            common_kit__list.style.transtion = `left 0.3s`
            console.log(common_kit__list.style.left, 'common_kit__list.style.left')
          }
        }
      }
      swipeLeft() // 执行该函数
      var swipeRight = () => {
        if (deltaX > 30) {
          console.log(2)
          if (commonkitLeft + moveLength > 0) {
            common_kit__list.style.left = 0 + 'px'
            common_kit__list.style.transtion = `left 0.3s`
          } else {
            common_kit__list.style.left = commonkitLeft + moveLength + 'px'
            common_kit__list.style.transtion = `left 0.3s`
          }
        }
      }
      swipeRight()
    })
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
    .tabs {
      display: flex;
      height: 44px;
      background: rgb(255, 255, 255);
      .van-tabs {
        width: 90vw;
        position: relative;
        &::after {
          height: 100%;
          position: absolute;
          display: block;
          width: 2px;
          border: 1px solid red;
          background: red;
          // top: 0;
          // right: 10px;
          // bottom: 0;
          // left: 0;
        }
      }
      .good-all-icon {
        width: 10vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
      }
    }
    .tabs-box {
      background: rgb(255, 255, 255);
      width: 100%;
      overflow: hidden;
      position: relative;
      min-height: 48px;
      overscroll-behavior: contain;
      &::-webkit-scrollbar{ display:none; }
      &::after {
        display: block;
        content: '';
        clear: both;
      }
      .tabs-ul {
        position: absolute;
        display: flex;
        width: 1000px;
         overscroll-behavior: contain;
        .tabs-li {
          padding: 0 8px;
          line-height: 3rem;
          color: #646566;
          font-size: 15px;
          text-align: center;
          cursor: pointer;
        }
        .active {color: #ee0a24;}
      }
      .tabs-shadow {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        /* left: 0; */
        height: 100%;
        /* width: 1px; */
        border: 1px solid #646566;
        box-shadow: 18px 0px 12px 20px #646566;
      }
    }
  }
</style>
