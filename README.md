## ![Ink](https://raw.githubusercontent.com/dbones/ink/master/images/bitmap.png "Ink")

# Ink => OpenApi Docs for Micro-services

With multiple services, each of them exposing their own OpenApi 2/3 docs, we need a single place to bring them together.

Consider this a catalog of the services you want to expose.

## Features

- Simple configuration.
- Reads all meta information from OpenApi 2/3 docs.
- Uses Redoc to show OpenApi 2/3 docs.
- Api Gateway Agnostic.

## known issues:

- Redoc anchors.
- Linking directly to the docs.

feel free to help out :)

## Demo Video:

[![Ink](https://img.youtube.com/vi/whe4WfXx-ZI/0.jpg)](https://www.youtube.com/watch?v=whe4WfXx-ZI)




## DEV notes:

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run dev app

Run `npm start`, then open `http://localhost:8080`

You can change the standard webpack configurations from CLI easily with something like this: `npm start -- --open --port 8888`. However, it is better to change the respective npm scripts or `webpack.config.js` with these options, as per your need.

To enable Webpack Bundle Analyzer, do `npm run analyze` (production build).

To enable hot module reload, do `npm start -- --hmr`.

To change dev server port, do `npm start -- --port 8888`.

To change dev server host, do `npm start -- --host 127.0.0.1`

**PS:** You could mix all the flags as well, `npm start -- --host 127.0.0.1 --port 7070 --open --hmr`

For long time aurelia-cli user, you can still use `au run` with those arguments like `au run --env prod --open --hmr`. But `au run` now simply executes `npm start` command.

## Build for production

Run `npm run build`, or the old way `au build --env prod`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.
