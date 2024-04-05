import { defineConfig } from '@solidjs/start/config'
import type { Plugin } from 'vite'
import civetPlugin from 'vite-plugin-civet'


export default defineConfig({
  devOverlay: true,
  vite: () => ({
    plugins: [
      civetPlugin({
        stripTypes: false,
        outputExtension: 'tsx',
        outputTransformerPlugin: 'solid',
      }) as Plugin
  ],
  }),
})
