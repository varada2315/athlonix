import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3322,
    host: '0.0.0.0',
    allowedHosts: ['aiwrap.cyberpunk.co.in']
  }
})

