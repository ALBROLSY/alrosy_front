import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
   define:{
      global:'globalHtis',
   },
    build:{
      commonjsOptions:{
        transformMixedEsModules:true,
    }
    },
    optimizeDeps:{
      include:['bootstrap']
    },
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
