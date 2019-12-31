<template>
  <div class="login-form">
        <van-cell-group>
            <van-field
                v-model="username"
                label="用户名:"
                placeholder="请输入用户名"
        />
            <van-field
                v-model="phone"
                type="password"
                label="密码:"
                placeholder="请输入密码"
            />
        </van-cell-group>
        <van-cell-group>
            <van-button type="primary" block @click="handleSubmit">登录</van-button>
        </van-cell-group>
    </div>
</template>
<script>
import { Field, Cell, CellGroup, Button } from 'vant'
export default {
  name: 'LoginForm',
  components: {
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data () {
    return {
      username: '123',
      phone: '1111'
    }
  },
  mounted () {
    let vanGroup = document.querySelectorAll('.van-cell-group')
    for (let i = 0; i < vanGroup.length; i++) {
      vanGroup[i].classList.remove('van-hairline--top-bottom')
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('on-success-valid', {
        userName: this.username,
        password: this.phone
      })
    }
  }

}
</script>
<style lang="less">
    .login-form {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        height: 100vh;
        .van-cell-group  {
            width: 80vw;
            border: none;
            box-shadow: none;
            padding: 0;
            .van-field {
                border: 1px solid #f3f3f3;
                box-shadow: 0px 0px 5px #f3f3f3;
                margin: 10px 0;
                border-radius: 15px;
                .van-cell__title {
                    width: 60px;
                }
            }
            .van-button {
                margin-top: 20px;
                border-radius: 20px;
                width: 100%;
            }
        }

    }
</style>
