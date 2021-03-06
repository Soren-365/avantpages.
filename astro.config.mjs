import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), svelte(), tailwind(), partytown(), sitemap()]
});