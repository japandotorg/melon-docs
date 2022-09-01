import { ref } from "vue";

export interface Sponsor {
    url: string
    img: string
    name: string
    description?: string
}

export interface SponsorData {
    special: Sponsor[]
    platinum: Sponsor[]
    gold: Sponsor[]
    silver: Sponsor[]
    bronze: Sponsor[]
}

export const data = ref<SponsorData>()
export const pending = ref<boolean>(false)

export const base = "https://sponsors.melonbot.io"

export const load = async () => {
    if (!pending.value) {
        pending.value = true
        data.value = await (await fetch(`${base}/data.json`)).json()
    }
}
