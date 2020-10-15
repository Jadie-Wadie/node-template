# React Template

![Release](https://img.shields.io/github/package-json/v/Jadie-Wadie/react-template)
![License](https://img.shields.io/github/license/Jadie-Wadie/react-template)

> A template for [React](https://reactjs.org/) + [NodeJS](https://nodejs.org/en/) projects.

## Introduction

This template combines a [Parcel](https://parceljs.org/) based [React](https://reactjs.org/) client with a [Express](https://expressjs.com/) based [NodeJS](https://nodejs.org/en/) server, both written in [TypeScript](https://www.typescriptlang.org/).

It also includes [Prettier](https://prettier.io/) and [Docker](https://www.docker.com/) configuration.

By default, the client is styled with [Pico CSS](https://picocss.com/). To remove this, remove the `<link>` from [`index.html`](/public/index.html).

## Usage

Create a [new project](https://github.com/Jadie-Wadie/react-template/generate) based on this template.

### Development

Run the client in development mode. The [Parcel](https://parceljs.org/) output is hidden by the [TypeScript](https://www.typescriptlang.org/) compiler.

```sh
npm run start:client
```

Run the server with [nodemon](https://nodemon.io/).

```sh
npm run start:server
```

You'll need both if you want to test an API.

### Production

Build the client and the server.

```sh
npm run build
```

Start the server.

```sh
npm start
```

### Docker

Build a [Docker](https://www.docker.com/) image. This does not run `npm build`, so you'll need to do that first.

```sh
docker build -t <your username>/react-template .
```

### Misc

Remove the [Parcel](https://parceljs.org/) cache directory, and clear the `dist` folder.

```
npm run rimraf
```

Run [Prettier](https://prettier.io/) and sort the [`package.json`](package.json)

```
npm run lint
```

## License

[MIT](LICENSE)
