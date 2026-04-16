// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
    site: "https://durummixto.com",
    output: 'server',
    integrations: [mdx(), sitemap(), react(), keystatic()],
    adapter: cloudflare({
        imageService: 'passthrough',
        platformProxy: {
            enabled: true,
        },
    }),
    // ESTO ES LO QUE SOLUCIONA EL ERROR DE LA CONSOLA (Pantalla en blanco)
    vite: {
        optimizeDeps: {
            exclude: ['@keystatic/core', '@keystatic/astro']
        },
        ssr: {
            noExternal: ['@keystatic/core', '@keystatic/astro']
        }
    }
});