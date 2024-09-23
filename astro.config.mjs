import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server", // Changed from 'hybrid' to 'server'
  site: "https://astroship.web3templates.com",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  adapter: vercel(), // Added Vercel adapter
});
