import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/boiling-point/",
  plugins: [react()],
  build: {
    outDir: 'build'  // Change output directory to 'build'
  }
});