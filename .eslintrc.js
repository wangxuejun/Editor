module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    "wx": false,
    "QRCode": false
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: ["error", "always"],
    semi: ["error", "never"],
    'linebreak-style': "off",
    'vue/no-multiple-template-root': 0,
    'vue/comment-directive': 'off',
    'vue/no-v-model-argument': 'off'
  }
}
