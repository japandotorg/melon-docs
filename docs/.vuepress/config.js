const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')

module.exports = {
    lang: 'en-US',
    title: 'Melon Docs',
    description: 'Demo description for now',
    plugins: [
        backToTopPlugin(),
    ]
}
