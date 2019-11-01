<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="loginForm.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="loginForm.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button type="info" style="width: 96%;margin-top: 15px" @click="handleLogin">登录</van-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { login, getInfo, logOut } from "@/api/user";
import { Toast } from 'vant'
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      // const data = {
      //   username: this.username,
      //   password: this.password,
      //   $router: this.$router,
      //   $route: this.$route
      // };
      // this.login(data)
      login(this.loginForm)
        .then(result => {
          if (result.code === 200) {
            this.$store.dispatch("user/SET_TOKEN", result.data[2]);
            Toast({
              message: "登录成功",
              position: "middle",
              duration: 1500
            });
            this.$router.push('/home');
          }
        })
        .catch(err => {
          console.log(err);
        });
      // this.$store.dispatch("user/login", this.loginForm).then(() => {
      //     // this.$router.push({ path: this.redirect || "/" });
      //     alert(2)
      //     this.$router.push('/home');
      //     // this.loading = false;
      //   })
      //   .catch(() => {
      //     // this.loading = false;
      //   });
    },
    // ...mapActions({
    //   login: "user/login"
    // })
  }
};
</script>

<style>
</style>