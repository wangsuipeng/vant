import Cookies from "js-cookie"
const ToKenKey = "vant-Token"

export function getToken() {
  return Cookies.get(ToKenKey)
}
export function setToken(token) {
  return Cookies.set(ToKenKey,token)
}
export function removeToken() {
  return Cookies.remove(ToKenKey)
}