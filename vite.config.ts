import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Here
    strictPort: true,
    port: 3000,
    proxy: {
      '/training-service': {
        target: 'http://training-service:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/training-service/, ''),
      },
    },
  },
});
