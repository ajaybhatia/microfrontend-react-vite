# React Vite Micro Frontend

This is a simple example of a micro frontend architecture using React and Vite.

## How to run

1. Clone the repository
2. Run `install-deps.sh` to install dependencies
3. Run `start.sh` to start the application

## How it works

This project is composed of three React applications: `home`, `about` and `host`. The `home` and `about` applications are micro frontends that are loaded by the `host` application.
The `home` and `about` applications are built using Vite and are served by the `host` application using the `@originjs/vite-plugin-single-spa` plugin.
