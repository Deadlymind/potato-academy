import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600, // Adjust the limit as needed
    rollupOptions: {
      output: {
        manualChunks: {
          // Specify manual chunks if needed
        },
      },
    },
  },
})
