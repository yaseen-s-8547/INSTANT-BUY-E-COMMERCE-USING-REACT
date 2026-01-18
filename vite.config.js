import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/INSTANT-BUY-E-COMMERCE-USING-REACT/",
  server: {
    proxy: {
      '/api': {
         target: 'https://instant-buy-backend.onrender.com',
        changeOrigin: true,
        secure:true
      },
      '/image': {
        target: 'https://instant-buy-backend.onrender.com',
        changeOrigin: true,
        secure:true
      }
    }
  }
})
