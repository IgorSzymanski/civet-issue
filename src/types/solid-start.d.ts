declare module '@solidjs/start/config' {
  import type { defineConfig as defineConfigType } from 'vite'
  import type { createApp, AppOptions } from 'vinxi'
  import type { Options } from "vite-plugin-solid"

  type SolidStartInlineConfig = {
    ssr?: boolean;
    solid?: Options;
    extensions?: string[];
    server?: AppOptions["server"];
    appRoot?: string;
    routeDir?: string;
    middleware?: string;
    devOverlay?:  boolean;
    experimental?: {
      islands?: boolean;
    }
    vite?: ViteConfig
  }

  type ViteConfig = Parameters<typeof defineConfigType>[0]
  export function defineConfig(baseConfig?: SolidStartInlineConfig): ReturnType<typeof createApp>
}
