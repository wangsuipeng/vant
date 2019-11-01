import { getToken, setToken, removeToken } from "@/utils/auth"
import { login, getInfo } from "@/api/user"
import { Toast } from 'vant'

const LOGIN = 'LOGIN'// 获取用户信息
const SetUserData = 'SetUserData'// 获取用户信息
const LOGOUT = 'LOGOUT'// 退出登录、清除用户数据
const USER_DATA = 'userDate'// 用户数据

const state = {
  token: getToken()
}

const mutations = {
  // SET_TOKEN: (state, token) => {
  //   // let userToken = data.data[2]
  //   state.token = token
  //   // setToken(userToken)
  //   // console.log(userToken)
  // }
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  
}

const actions = {
  // async login(state,data) {
  //   try {
  //     let res = await login({
  //       username: data.username,
  //       password: data.password
  //     });
  //     state.commit(LOGIN,res)
  //     Toast({
  //       message: '登录成功',
  //       position: 'middle',
  //       duration: 1500
  //     })
  //     setTimeout(() => {
  //       const redirect = data.$route.query.redirect || "/"
  //       data.$router.replace({
  //         path: '/home'
  //       })
  //     }, 1500);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // user login
  // login({ commit }, userInfo) {
  //   const { username, password } = userInfo
  //   return new Promise((resolve, reject) => {
  //     login({ username: username.trim(), password: password }).then(response => {
  //       const { data } = response
  //       commit('SET_TOKEN', data.data[2])
  //       console.log(22222)
  //       setToken(data.data[2])
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
  SET_TOKEN({ commit },view) {
    commit("SET_TOKEN",view)
    setToken(view)
  }
}
export default {
  namespaced: true,// 之后不同页面中引入需要加模块名
  state,
  mutations,
  actions,
}