# React Express Template

> My template for [React](https://reactjs.org/) projects.

## Introduction

This is a template for [React](https://reactjs.org/) projects built with [TypeScript](https://www.typescriptlang.org/).

It includes an [Express](https://expressjs.com/) server that hosts a REST API.

It uses [Lerna](https://lerna.js.org/) to manage dependencies, and includes a [Dockerfile](Dockerfile).

## Usage

Run the [Create React App](https://create-react-app.dev/) development server.

```sh
npm start -w client
```

Run the [Express](https://expressjs.com/) server.

```sh
npm start -w api
```

Lint the project.

```sh
npm run lint
```

Kill the process on a port (Default: 4000).

```sh
npm run kill -- 3000
```

Remove all `node_modules` directories.

```sh
npm run clean
```

Build the [Docker](https://www.docker.com/) image.

```sh
docker build . -t ja1den/react-express-template
```

## License

[MIT](LICENSE)
