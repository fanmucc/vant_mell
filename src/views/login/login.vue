<template>
  <div class="login">
    <logo-img class="logo"/>
    <login-Form class="formUp" @on-success-valid="handleSubmit"/>
  </div>
</template>

<script>
import loginForm from '@/components/loginForm'
import logoImg from '@/components/logoLogin'
export default {
  name: 'login',
  components: {
    loginForm,
    logoImg
  },
  methods: {
    handleSubmit ({ userName, password }) {
      console.log(userName, password)
    }
  },
  data () {
    return {
      logo: true
    }
  }
}
</script>
<style lang="less">
    .login {
        height: 100vh;
    }
</style>
