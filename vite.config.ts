import { sync } from 'resolve'
import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'
import Components from "vite-plugin-components";
import { ensurePrefix, slash } from '@antfu/utils'
import Icons, { ViteIconsResolver } from "vite-plugin-icons";

export function resolveImportPath(importName: string) {
    return sync(importName, {
        preserveSymlinks: false,
    })
}

export function toAtFS(path: string) {
    return `/@fs${ensurePrefix('/', slash(path))}`
}

const themeRoot = dirname(resolveImportPath("@windicss/vitepress-theme/package.json"))

export default defineConfig({
    resolve: {
        alias: {
            "@windicss/vitepress-theme/": `${toAtFS(themeRoot)}/`,
        },
    },
    plugins: [
        Components({
            dirs: [
                ".vitepress/theme/components",
                `${themeRoot}/components}`,
            ],
            extensions: [
                "vue",
                "ts",
            ],
            customLoaderMatcher: id => id.endsWith(".md"),
            customComponentResolvers: [
                ViteIconsResolver({
                    componentPrefix: "",
                }),
            ],
        }),
        Icons({
            defaultStyle: "vertical-align: middle;",
        }),
        WindiCSS({
            configFiles: [
                resolve(themeRoot, "windi.config.ts"),
            ],
        }),
        ViteRestart({
            restart: ".vitepress/config/*.*",
        }),
    ],
    optimizeDeps: {
        include: [
            "vue",
            "windicss",
        ],
    },
})
