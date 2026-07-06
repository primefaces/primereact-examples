import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode: PrimeReact injects its styles on the client, so rendering the
  // app client-side avoids a flash of unstyled content.
  ssr: false,
} satisfies Config;
