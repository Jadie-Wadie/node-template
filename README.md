# Node Template

![Release](https://img.shields.io/github/package-json/v/Jadie-Wadie/node-template)
![License](https://img.shields.io/github/license/Jadie-Wadie/node-template)

> A template for [NodeJS](https://nodejs.org/en/) projects.

## Introduction

This template combines a [React](https://reactjs.org/) client with a [NodeJS](https://nodejs.org/en/) server, both written in [TypeScript](https://www.typescriptlang.org/).

It also includes [Prettier](https://prettier.io/) and [Docker](https://www.docker.com/) configuration.

## Usage

Create a [new project](https://github.com/Jadie-Wadie/parcel-template/generate) based on this template.

### Development

Run the client in development mode.

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
docker build -t <your username>/<your app name> .
```

### Misc

Remove the `build` directory.

```
npm run clean
```

Run [Prettier](https://prettier.io/) and sort the [`package.json`](package.json).

```
npm run lint
```

## License

[MIT](LICENSE)
