export default ({ Vue, isServere }) => {
    if (!isServer) {
        import("vue-toasted").then((module) => {
            Vue.use(module.default)
        })
    }
}
