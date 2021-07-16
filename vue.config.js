const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: '/',
  lintOnSave: true,
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
  css: {
    extract: process.env.NODE_ENV === 'production'
  },
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components'),
        api: path.resolve(__dirname, './src/api'),
        pages: path.resolve(__dirname, './src/pages'),
        public: path.resolve(__dirname, 'public')
      }
    }
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      axios: 'axios'
    }
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240, // 只有大小大于该值(bytes)的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      )
    }
  },
  devServer: {
    hot: true,
    clientLogLevel: 'warning',
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '/api': '/' }
      }
    }
  }
}
