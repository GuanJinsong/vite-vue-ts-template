import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import componentsVite from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import dayjs from 'dayjs'

const root = process.cwd()

const pathResolve = (dir: string) => {
  return resolve(__dirname, '.', dir)
}

const __APP_INFO__ = {
  lastBuildTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
}

// https://vitejs.dev/config/
export default mode => {
  const env = loadEnv(mode, __dirname)
  console.log('build config', mode, env)
  return defineConfig({
    base: env.VITE_BASE,
    root,
    resolve: {
      alias: {
        '@': pathResolve('src'),
      },
    },
    server: {
      https: false,
      port: parseInt(env.VITE_PORT) || 6060,
      host: '0.0.0.0',
      proxy: {},
    },
    plugins: [
      // vue.js
      vue(),

      // 按需加载element-plus组件
      autoImport({
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/auto-imports.d.ts',
      }),
      componentsVite({
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/components.d.ts',
      }),
    ],
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: pathResolve('index.html'),
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  })
}
