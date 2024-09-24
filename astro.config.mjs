import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // Changed from 'hybrid' to 'server'
  output: "hybrid",

  site: "https://drovertravel.com",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  adapter: vercel(),
});