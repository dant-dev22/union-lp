import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/union',
  server: {
    allowedHosts: ['hyperaltruistic-joi-intime.ngrok-free.dev'],
  },
})
