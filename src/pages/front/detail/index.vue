<template>
  <div class="front-page">
    <v-md-editor v-model="text" mode="preview"></v-md-editor>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      text:
        '## 关于登录验证的几种方式的实践\n' +
        '### 1. cookie登录\n' +
        '> 服务器在登录接口中返回set-cookie，前台后续接口浏览器自动带上cookie到服务器。\n' +
        '\n' +
        '1.前端请求代码，第二个接口带上 withCredentials: true \n' +
        '``` javascript\n' +
        '$.ajax({\n' +
        "  type: 'post',\n" +
        "  url: 'http://localhost:3000/user/login',\n" +
        '  data: {\n' +
        "    user: 'wxj',\n" +
        '    password: 123456\n' +
        '  },\n' +
        '  dataType: "json",\n' +
        '  success: function (res) {\n' +
        '    console.log(res)\n' +
        '    let token = res.data.token\n' +
        '    $.ajax({\n' +
        "      type: 'get',\n" +
        "      url: 'http://localhost:3000/blog/getTagList',\n" +
        '      xhrFields: {\n' +
        '        withCredentials: true\n' +
        '      },\n' +
        '      data: {},\n' +
        '      dataType: "json",\n' +
        '      success: function (res) {\n' +
        '        console.log(res)\n' +
        "        console.log('document.cookie', document.cookie)\n" +
        '      }\n' +
        '    })\n' +
        '  }\n' +
        '})\n' +
        '```\n' +
        '\n' +
        '2. 服务器代码，只有同域浏览器才会自动带上cookie，不同域会忽略。\n' +
        '\n' +
        '``` javascript\n' +
        '// express 配置，省略不相关代码，这里配置\n' +
        '// http://localhost:3000 为同域名访问\n' +
        '// http://192.168.1.105:8080 为跨域访问\n' +
        '// Access-Control-Allow-Origin 不能为*，必须是确定的域名\n' +
        "const origins = ['http://localhost:3000', 'http://192.168.1.105:8080']\n" +
        "app.all('*', function(req, res, next) {\n" +
        '  if (origins.indexOf(req.headers.origin) >= 0) {\n' +
        "    res.header('Access-Control-Allow-Origin', req.headers.origin)\n" +
        '  }\n' +
        '})\n' +
        '// ...  登录接口返回set-cookie\n' +
        "res.cookie('suweiqing', 'aa', {\n" +
        '  httpOnly: true,\n' +
        '  maxAge: 30 * 24 * 60 * 60 * 1000\n' +
        '})\n' +
        '// ...\n' +
        '```\n' +
        '3. 同域情况下，域名为http://localhost:3000，请求接口同为http://localhost:3000 。红色login接口登录服务器返回set-cookie。绿色getTagList接口将set-cookie中的suweiqing自动带上。\n' +
        '![same-origin-cookie.png](https://i.loli.net/2021/07/19/sObzMGIRkxUmHai.png)\n' +
        '\n' +
        '4. 不同域情况，网页域名 http://192.168.1.105:8080 ，接口请求http://localhost:3000。红色login接口返回set-cookie，但是绿色getTagList接口请求带未能将cookie带上。\n' +
        '![other-origin-cookie.png](https://i.loli.net/2021/07/19/XB8xMdteuwWcLgG.png)'
    }
  }
})
</script>
<style scoed lang="scss">
.front-page {
  padding: 0 4px;
  width: 100%;
  height: 100%;
}
</style>
