import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true, // Forzar el modo polling
    },
    port: 5173, // Asegurarse de que esté en el puerto correcto
  },
})
