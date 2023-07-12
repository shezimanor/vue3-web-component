module.exports = {
  env: {
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true // 解決 vue3 defineProps 未定義
  },
  extends: [
    // 以下有順序性的
    'plugin:vue/vue3-recommended', // https://eslint.vuejs.org/rules/
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off', // 可以在任何環境用 console
    'no-underscore-dangle': 'off', // 可以使用_作為變數名稱
    'prettier/prettier': 'error', // 當 ESLint 檢測到代碼不符合 Prettier 的格式化規則時，將報告為錯誤
    'import/no-extraneous-dependencies': 'off', // 不要檢查依賴檔
    'vue/no-v-html': 'off' // v-html 不會報錯
  },
  settings: {
    // 需安裝 eslint-import-resolver-alias 以解決 eslint 看不懂 vite.config.js 裡面設定的 alias
    'import/resolver': {
      alias: {
        map: [['@', './src']]
      }
    }
  },
  globals: {
    // ESLint Doc: https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    // 例子: gtag: 'readonly' // 讓 ESLint 可以認得全域 gtag 變數
  }
};
