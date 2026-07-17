# PrimeReact + Form libraries

The same deploy form built three times with [PrimeReact](https://primereact.dev) v11 in **styled** mode, once per form library, so each one can be compared side by side. Validation is handled with Zod in all three.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and pick an example:

| Route              | Library                                                | Binding                                             |
| ------------------ | ------------------------------------------------------ | --------------------------------------------------- |
| `/react-hook-form` | [React Hook Form](https://react-hook-form.com)         | `useForm` + `Controller` with a `zodResolver`        |
| `/tanstack-form`   | [TanStack Form](https://tanstack.com/form)             | `useForm` + `form.Field` with a Standard Schema      |
| `/formik`          | [Formik](https://formik.org)                           | `useFormik` with a Zod validation schema             |

Every route renders the same PrimeReact components (`InputText`, `Select`, `CheckboxGroup`, `Message`, `Button`), so the only difference between them is how the form library reads values, forwards changes and exposes errors.

## Links

- **PrimeReact** — [primereact.dev](https://primereact.dev)
- **Styled mode docs** — [primereact.dev/docs/styled](https://primereact.dev/docs/styled)
- **Get all access** — [primeui.store](https://primeui.store)
