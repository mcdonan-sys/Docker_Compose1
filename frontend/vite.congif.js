import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';


export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  preview: {
    port: 3000,
    host: '0.0.0.0'
  }
})
