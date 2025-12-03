// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore
import astroI18next from "astro-i18next";


// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next()],
});
