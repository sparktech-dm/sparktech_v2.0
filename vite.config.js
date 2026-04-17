import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base: '/',
    server: {
    host: "0.0.0.0",   // allow access from LAN
    port: 5173,        // change port if needed
    strictPort: true   // exit if port is already in use
  },
  
})
