import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    insertTypesEntry: true,
    outDir: 'types', // ✅ Chỉ rõ thư mục types
    tsconfigPath: './tsconfig.app.json',
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs','system'],
      fileName: (format) => {
        return `index.${format}.js`
      },
      cssFileName: 'index',
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
    },

  },
})
