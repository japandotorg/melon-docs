import { baseConfig } from "@vue/theme/config";
import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "@vue/theme";

const nav = [
    {
        text: "Docs",
        activeMatch: `^/(guide|melon-guide|examples)/`,
        items: [
            { text: "Custom Commands", link: "/custom-commands/" },
        ],
    },
]

export const sidebar = {
    "/custom-commands": [
        {
            text: "Custom Commands",
            items: [
                { text: "Tags Intro", link: "/custom-commands/intro" }
            ]
        }
    ]
}

export default defineConfigWithTheme<ThemeConfig>({
    extends: baseConfig,

    lang: 'en-US',
    title: 'MELON DOCS',
    description: 'The Complete Multipurpose Discord Bot',
    srcDir: 'src',
    // srcExclude: [],
    scrollOffset: 'header',

    themeConfig: {
        nav,
        sidebar,

        editLink: {
            repo: 'japandotorg/melon-docs/',
            text: 'Edit this page on GitHub'
        },

        footer: {
            license: {
                text: 'MIT License',
                link: 'https://opensource.org/licenses/MIT'
            },
            copyright: `Copyright © 2014-${new Date().getFullYear()} Japandotorg`
        }
    },

    vite: {
        define: {
            __VUE_OPTIONS_API__: false
        },
        optimizeDeps: {
            // include: [],
            exclude: ['@vue/repl']
        },
        // @ts-ignore
        ssr: {
            external: ['@vue/repl']
        },
        server: {
            host: true,
            fs: {
                allow: ['../..']
            }
        },
        build: {
            minify: 'terser',
            chunkSizeWarningLimit: Infinity
        },
        json: {
            stringify: true
        }
    },

    vue: {
        reactivityTransform: true
    }
})
