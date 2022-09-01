import "./styles/index.css";
import { h, App } from "vue";
import { VPTheme } from "@vue/theme";
import Banner from './components/Banner.vue'

export default Object.assign({}, VPTheme, {
    Layout: () => {
        // @ts-ignore
        return h(VPTheme.Layout, null, {
            banner: () => h(Banner)
        })
    },
    enhanceApp({ app }: { app: App }) {
        
    }
})
