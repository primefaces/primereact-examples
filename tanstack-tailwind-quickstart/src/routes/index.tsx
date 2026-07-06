import { createFileRoute } from '@tanstack/react-router'
import { PrimeReactProvider } from '@primereact/core'
import PrimeApp from '#/components/PrimeApp'

const primereact = {
  theme: {
    options: {
      darkModeSelector: '.dark',
    },
  },
  license: 'PrimeUI-Commercial-Key...',
}

// PrimeReact injects its styles on the client, so this route opts out of SSR
// to avoid a flash of unstyled content.
export const Route = createFileRoute('/')({
  ssr: false,
  component: Home,
})

function Home() {
  return (
    <PrimeReactProvider {...primereact}>
      <PrimeApp />
    </PrimeReactProvider>
  )
}
