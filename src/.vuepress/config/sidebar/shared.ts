import { SidebarConfigArray } from "vuepress/config";

export function getDocsSidebar (groupA, groupB): SidebarConfigArray {
    const sidebar: SidebarConfigArray = [
        {
            title: groupA,
            collapsable: false,
            children: [
                "",
                "getting-started",
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                "links",
            ]
        }
    ]

    return sidebar
}
