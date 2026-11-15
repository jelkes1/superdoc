import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
  optimizeDeps: { exclude: ['@superdoc/docx-engine'], include: ['vue'] },
  resolve: { dedupe: ['vue'] },
  build: { rollupOptions: { input: resolve('examples/tables-columns/index.html') } },
});
