import { UserConfig } from "vitepress";
import { DefaultTheme }  from "@windicss/vitepress-theme/config";

import head from "./head";
import themeConfig from "./theme";
import { metaData } from "./constants";

const config: UserConfig<DefaultTheme.Config> = {
    title: "Melon Docs",
    description: metaData.description,
    head,
    themeConfig,
}

export default config;
