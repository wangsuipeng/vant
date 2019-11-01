import axios from "axios"
import store from "@/store"
import { Toast } from 'vant'
import { getToken } from "@/utils/auth"

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if(store.getters.token) {
      config.headers['Authorization'] = getToken()
      config.headers['currentProjectId'] = 275
    }
    return config
  },
  error => {
    console.log(error,'err')
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      if (res.code === 401 || res.code === 300 || res.code === 50014) {
        Toast({
          message: res.message,
          position: 'middle',
          duration: 1500
        })
        // to re-login
        // Toast.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //   confirmButtonText: 'Re-Login',
        //   cancelButtonText: 'Cancel',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast.fail({
      message: error.message,
      duration: 1.5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service