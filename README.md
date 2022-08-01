# Haskell in a nutshell

This repository contains an example application for the [@frthjf/jupyter-client](https://github.com/frthjf/jupyter-client) package. It implements an interactive Haskell shell hosted on [binder.org](https://mybinder.org).

## Development

To build or run the example, use the `vitepress CLI`

```
node_modules/vitepress/bin/vitepress.js dev src
```

If you like to rely on a local jupyter backend instead of the Binder.org endpoint, you may use the [ihaskell](./ihaskell) script to launch a server.

```
chmod +x ihaskell
./ihaskell
```