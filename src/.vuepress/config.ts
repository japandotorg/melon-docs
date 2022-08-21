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
                        "/custom-commands/",
                        "/custom-commands/blocks",
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
    },
    plugins: [
        [
            'vuepress-plugin-container',
            {
                type: 'vue',
                before: '<pre class="vue-container"><code>',
                after: '</code></pre>'
            }
        ],
    ],
    head: [
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?b9a7d913b197b0b6c9a7e096fcc0f4a1";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            }) ();
            `
        ],
        [
            "meta",
            {
                name: "referrer",
                content: "no-referrer-when-downgrade"
            }
        ],
    ],
}));
