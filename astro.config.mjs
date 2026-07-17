// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

// https://astro.build/config
export default defineConfig({
    integrations: [
        expressiveCode({
            themes: ['material-theme-ocean'],

            plugins: [pluginLineNumbers()],

            defaultProps: {
                showLineNumbers: true,
            },

            styleOverrides: {
                codeFontFamily: "'Fira Code', monospace",
                codeFontSize: '0.85rem',
                codeBackground: '#282c34',
            },
        }),

        mdx(),
    ],
    vite: {
        plugins: [tailwindcss()],
        server: {
            allowedHosts: '3305-103-110-9-228.ngrok-free.app',
        },
    },

    site: 'https://zensynthysian.github.io',
    base: '/kaleidoscape',
});
