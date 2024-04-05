import { defineConfig } from '@solidjs/start/config'
import type { Plugin } from 'vite'
import civetPlugin from 'vite-plugin-civet'

const extensions = ['tsx', 'ts', 'js', 'civet']

export default defineConfig({
  extensions,
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
