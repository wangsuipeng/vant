import axios from "@/utils/http"

export function fetchList(data) {
  return axios({
    url: "bjqualitymgt/quality/track/queryQualityInfo",
    method: "post",
    data: data
  })
}