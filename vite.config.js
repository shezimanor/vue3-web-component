import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import removeConsole from 'vite-plugin-remove-console';

// 如果要在這裡使用ENV: https://cn.vitejs.dev/config/#using-environment-variables-in-config

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 讓 index.html 裡的 src="/assets/xxx"改為相對路徑 src="assets/xxx"
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 將所有帶短橫線的標籤名都視為自定義元素
          isCustomElement: tag => tag.includes('-')
        }
      }
    }),
    removeConsole()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    // 樣式表插件
    postcss: {
      plugins: [autoprefixer]
    }
  }
});
