# Parcel Template

![Release](https://img.shields.io/github/package-json/v/Jadie-Wadie/parcel-template)
![License](https://img.shields.io/github/license/Jadie-Wadie/parcel-template)

> A template for [Parcel](https://parceljs.org/) + [NodeJS](https://nodejs.org/en/) projects.

## Introduction

This template combines a [Parcel](https://parceljs.org/) client with a [NodeJS](https://nodejs.org/en/) server, both written in [TypeScript](https://www.typescriptlang.org/).

It also includes [Prettier](https://prettier.io/) and [Docker](https://www.docker.com/) configuration.

## Usage

Create a [new project](https://github.com/Jadie-Wadie/parcel-template/generate) based on this template.

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
docker build -t <your username>/<your app name> .
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
