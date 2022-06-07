import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path, { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE')

  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': join(__dirname, './src')
      }
    },
    server: {
      proxy: {
        // 代理所有 /api 的请求
        '/api': {
          // 请求目标地址
          target: env.VITE_BASE_URL,
          // 支持跨域
          changeOrigin: true
        }
      }
    }
  }
})
