import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Конфиг без @tailwindcss/vite
export default defineConfig({
  plugins: [react()],
})