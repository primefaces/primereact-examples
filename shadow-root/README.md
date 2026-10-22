# PrimeReact in a shadow root

A coffee roaster's website with a reorder form that renders inside a shadow root. The form is a small React app with PrimeReact, mounted in a container in the shadow root of a host element on the page.

The website styles every `button` and `input` on the page, and none of those rules reach the form. The form's styles do not leak out to the page either. The dark mode button in the header switches the form too.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primereact-examples/tree/main/shadow-root)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `src/main.tsx` attaches the shadow root, adds the form's own CSS to it and renders `PrimeReactProvider` with `withShadowRoot()`.
- `src/ReorderForm.tsx` is the form. Each `Select.Portal` has `appendTo="self"`, so the panels open next to the field, inside the shadow root.

Read more in [Using PrimeUI components inside a shadow root](https://blog.primeui.dev/blog/using-primeui-components-inside-a-shadow-root/).
