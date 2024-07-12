import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Default to 3000 if PORT is not set
    host: true,
  },
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-icons/fa',
        'framer-motion',
        'axios',
        'lodash',
        'moment'
      ],
    },
  },
});
