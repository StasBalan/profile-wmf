const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
// const deps = require('./package.json').dependencies;

module.exports = {
    devServer: {
        port: 8084,
    },
    publicPath: "http://localhost:8084/",
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "profile",
                filename: "remoteProfileEntry.js",
                remotes: {
                    shell: "shell@http://localhost:8083/remoteEntry.js",
                },
                exposes: {
                    "./Profile": "./src/views/Profile.vue",
                },
                // shared: {
                //     vuex: {
                //         eager: true,
                //         singleton: true,
                //         requiredVersion: deps.vuex
                //     }
                // }
            }),
        ],
    },
};