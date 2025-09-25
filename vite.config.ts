import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [ 
    VueRouter({
    routesFolder: 'src/pages',
    extensions: ['.vue'],
    importMode: 'sync',          
    dts: 'src/types/vue-router-auto.d.ts'
    }), 
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts',
    })],
})
