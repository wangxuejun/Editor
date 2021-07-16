import axios from 'axios'
let http = axios.create({
  baseURL: '/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [
    function (data) {
      return data
    }
  ]
})
http.defaults.timeout = 15000
http.interceptors.request.use(
  function (config) {
    let url = config.url
    // get参数编码
    if (config.method === 'get' && config.params) {
      url += '?'
      let keys = Object.keys(config.params)
      for (let key of keys) {
        if (config.params[key]) {
          url += `${key}=${encodeURIComponent(config.params[key])}&`
        }
      }
      url = url.substring(0, url.length - 1)
      config.params = {}
    }
    config.url = url
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  function (response) {
    let code = response.data.errcode
    if (code === 0) {
      return response
    } else {
      return response
    }
  },
  function (response) {
    if (response.config.loading) {
      // router.push({ path: '/error' })
    }
  }
)
export default http
