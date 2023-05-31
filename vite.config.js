import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  // base: process.env.NODE_ENV === 'production' ? '/tazcan_dev/' : '/',
  plugins: [vue()]
})
