# React Template

> A React + Node JS template.

## Introduction

This template combines a Parcel based React client with a TypeScript NodeJS server.
It also includes Docker configuration.

The included server will host the built version of the client.

By default, the client is styled with Pico CSS. To change this, remove the `<link>` from [`index.html`](/public/index.html).

## Usage

### Development

Run the client in development mode (hot reload with Parcel).
The parcel output is hidden by the Typescript compiler.

```sh
npm run start:client
```

Run the server with nodemon.

```sh
npm run start:server
```

You'll need to run both if you want to test an API.

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

Build a docker image. This does not run `npm build`, so you'll need to do that first.

```sh
docker build -t <your username>/node-web-app .
```

## License

[MIT](LICENSE)
