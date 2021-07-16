import http from './http'
function createHttp(config) {
  return new Promise((resolve, reject) => {
    http(config)
      .then(res => {
        resolve(res)
      })
      .catch(() => {
        reject()
      })
  })
}
export function apiLoginByOpenId(config) {
  return createHttp(config)
}
