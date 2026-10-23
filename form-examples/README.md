# PrimeReact with form libraries

The same deploy form built three times with [PrimeReact](https://primereact.dev) in styled mode, once for each form library, so they can be compared side by side. All three validate with Zod.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primereact-examples/tree/main/form-examples)

## Run it

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) and pick an example:

| Route | Library | Binding |
| --- | --- | --- |
| `/react-hook-form` | [React Hook Form](https://react-hook-form.com) | `useForm` and `Controller` with a `zodResolver` |
| `/tanstack-form` | [TanStack Form](https://tanstack.com/form) | `useForm` and `form.Field` with a Standard Schema |
| `/formik` | [Formik](https://formik.org) | `useFormik` with a Zod validation schema |

## Where to look

Every route renders the same PrimeReact components (`InputText`, `Select`, `CheckboxGroup`, `Message`, `Button`), so the only difference between them is how the form library reads values, passes changes on and shows errors.

- `components/prime-ssr-provider.tsx` sets up `PrimeReactProvider`.

Read more in the [PrimeReact styled mode docs](https://primereact.dev/docs/styled).
