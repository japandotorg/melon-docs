const isProd = process.env.NODE_ENV === 'production';

const site = isProd ? 'https://docs.melonbot.io/' : "http://localhost:3000"

export const metaData = {
    title: "Melon Docs",
    description: "Discord Multipurpose Bot",
    site,
    // image: `${site}`
}
