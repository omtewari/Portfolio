import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',                // React itself
        'react-dom',            // React DOM
        'react-icons/fa',       // FontAwesome icons
        'framer-motion',        // Framer Motion
        'axios',                // Axios for HTTP requests
        'lodash',               // Lodash utility library
        'moment',
        'react-icons/fa6'               // Moment.js for date/time handling
        // Add other external modules as needed
      ],
    },
  },
})
