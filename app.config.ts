import civetVitePlugin from '@danielx/civet/vite';
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  vite: {
    plugins: [
      civetVitePlugin({
      ts: 'preserve',
      typecheck: true,
      outputExtension: '.tsx',
  })
    ]
  }
});
