import { getDocsSidebar } from "./shared";
import { SidebarConfig4Multiple } from "vuepress/config";

export const SidebarEN: SidebarConfig4Multiple = {
    "/docs/": getDocsSidebar("Docs", "Links"),
}
