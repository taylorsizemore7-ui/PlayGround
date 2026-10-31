import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 3000
  },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT || 3002)
  }
})
