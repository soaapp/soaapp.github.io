import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true
  },
  // For GitHub Pages SPA routing
  // This ensures the server always returns index.html for 404s
  // which allows the client-side router to handle the routing
  // This is handled by the 404.html in the public directory for GitHub Pages
});
