import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import robotsTxt from "astro-robots-txt"
import { defineConfig } from "astro/config"

import integration from "./src/lib/integration"

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://ui.full.dev",

  prefetch: {
    prefetchAll: true,
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [robotsTxt(), sitemap(), react(), integration(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
})