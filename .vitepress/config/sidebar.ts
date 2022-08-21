import type { DefaultTheme } from "@windicss/vitepress-theme/config";

export const sidebar: DefaultTheme.Config["sidebar"] = {
    "/docs": [
        {
            text: "Docs",
            children: [
                { text: "Getting Started", link: "/docs/getting-started" },
            ],
        },
    ]
}