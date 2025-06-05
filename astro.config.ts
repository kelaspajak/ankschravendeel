import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import robotsTxt from "astro-robots-txt"
import { defineConfig, fontProviders } from "astro/config"

import integration from "./src/lib/integration"

export default defineConfig({
  site: "https://ui.full.dev",
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-sans",
        weights: [
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
        ],
      },
    ],
  },
  prefetch: {
    prefetchAll: true,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [robotsTxt(), sitemap(), react(), integration()],
  vite: {
    plugins: [tailwindcss()],
  },
})
