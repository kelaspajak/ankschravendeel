import type { AstroIntegration } from "astro"

export default function fulldevIntegration(): AstroIntegration {
  return {
    name: "/integration",
    hooks: {
      "astro:config:setup": async ({ injectScript }) => {
        injectScript(
          "page-ssr",
          "import '@/styles/globals.css'; import '@/styles/theme.css';"
        )
      },
    },
  }
}
