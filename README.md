# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```bash
bun run dev
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `bun run build` will generate a Bun app that you can run with `bun start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.ts`.


## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
