# PrimeReact micro frontends

A coffee roaster's back office, made of two micro frontends: Orders and Customers. Each one is built separately and ships its own copy of React and PrimeReact. The host is a third React app that uses PrimeReact with Aura in the default mode, and it loads the micro frontends at runtime.

Orders uses Lara and Customers uses Nora, each in isolated mode inside its own shadow root. Switching tabs unmounts one app and mounts the other. Dialogs, select panels and toasts keep the theme of the app that opened them. The host's button keeps its Aura look, and the dark mode button in the header switches all three.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primereact-examples/tree/main/micro-frontends)

## Run it

```bash
npm install
npm run dev
```

`npm run dev` builds the two micro frontends into `public/mfe` first, then starts the host.

## Where to look

- `vite.orders.config.ts` and `vite.customers.config.ts` build each micro frontend as a separate bundle, the way two teams would build and release them.
- `src/host/Shell.tsx` is the host. It loads `/mfe/orders.js` or `/mfe/customers.js` with `import()` when a tab is clicked, calls `mountOrders` or `mountCustomers` with its outlet and keeps the function that unmounts the current app.
- `src/orders/mount.tsx` and `src/customers/mount.tsx` create an element with a shadow root, add the app's own CSS to it and render `PrimeReactProvider` with `withIsolation({ key, root })`. The `root` element carries the app key, so the app's own CSS can read theme variables such as `--p-content-border-color`.

Read more in [Micro frontends with their own PrimeUI theme](https://blog.primeui.dev/blog/micro-frontends-with-primeui/).
