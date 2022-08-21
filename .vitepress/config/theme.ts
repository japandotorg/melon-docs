import type { DefaultTheme } from "@windicss/vitepress-theme/config";
import { sidebar } from "./sidebar";
import { nav } from "./nav";

const themeConfig: DefaultTheme.Config = {
    repo: "japandotorg/melon-docs",
    logo: "https://cdn.discordapp.com/avatars/808706062013825036/29d62a05f146d3e491b43b1fc6d4783f.png?size=1024",
    docsDir: "/docs",
    editLinks: true,
    editLinkText: "Suggest changes to this page",
    nav,
    sidebar,
}

export default themeConfig;
