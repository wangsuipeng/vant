import axios from '@/utils/http'
import Qs from 'qs'

export function login(data) {
  return axios({
    url: "/bjupm/login",
    method: "post",
    data
  })
}

export function getInfo(token) {
  return axios({
    url: "/user/info",
    method: "get",
    param: { token }
  })
}

export function logOut() {
  return axios({
    url: "bjupm/users/quit",
    method: "post"
  })
}