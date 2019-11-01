<template>
  <div>
    <van-button type="info" @click="outLogin">退出登录</van-button>
  </div>
</template>

<script>
import { fetchList } from "@/api/article";
import { login, getInfo, logOut } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth"
import { Toast } from "vant";
export default {
  data() {
    return {
      currentPage: 0,
      pageSize: 10,
      searchDepVelue: "",
      searchPersonId: "",
      searchDate: "",
      status: ""
    };
  },
  created() {
    // this.getList();
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      var params = new URLSearchParams();
      params.append("pageNumber", this.currentPage);
      params.append("pageSize", this.pageSize);
      params.append("search", this.searchDepVelue);
      params.append("checkPersonId", this.searchPersonId);
      params.append("state", this.status);
      params.append("startDate", this.searchDate);
      fetchList(params)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.loh(err);
        });
    },
    outLogin() {
      logOut()
        .then(result => {
          if (result.code === 200) {
            this.$store.dispatch("user/SET_TOKEN", "")
            Toast({
              message: "退出成功",
              position: "middle",
              duration: 1500
            });
            removeToken()
          }
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>