// @ts-check
import { defineConfig } from 'astro/config';

// Cloudflare Pages (GitHub integration), custom domain: https://llm-catalog.fuwasegu.com/
// Served from the domain root, so no `base` is needed.
export default defineConfig({
  site: 'https://llm-catalog.fuwasegu.com',
});
