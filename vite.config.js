import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/listly'
})


//import { defineConfig } from 'vite';

// export default defineConfig({
//   base: '/my-vite-project/',
// });
