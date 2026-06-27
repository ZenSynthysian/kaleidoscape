// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    vite: {
        plugins: [tailwindcss()],
        server:{
            allowedHosts: "3305-103-110-9-228.ngrok-free.app"
        }
    },
    site: 'https://zensynthysian.github.io', 
    base: '/kaleidoscape', 
});
