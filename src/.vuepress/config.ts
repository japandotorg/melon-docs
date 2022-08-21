import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
    theme: "vt",
    title: "MELON DOCS",
    themeConfig: {
        enableDarkMode: true,
        repo: "https://github.com/japandotorg/melon-docs",
        nav: [
            {
                text: "Docs", link: "/custom-commands/"
            },
        ],
        sidebar: {
            "/custom-commands/": [
                {
                    title: "Custom Commands",
                    collapsable: false,
                    children: [
                        "/custom-commands/"
                    ]
                }
            ]
        },
        codeSwitcher: {
            groups: {
                default: {
                    ts: "TypeScript",
                    js: "JavaScript",
                },
                "plugin-usage": {
                    tuple: "Tuple",
                    object: "Object"
                }
            }
        }
    } 
}));
