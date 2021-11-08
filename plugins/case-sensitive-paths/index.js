const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = function(context, options) {
    return {
        name: 'case-sensitive-paths',
        configureWebpack(config, isServer) {
            return {
                plugins: [
                    new CaseSensitivePathsPlugin()
                ],
            };
        },
    };
};