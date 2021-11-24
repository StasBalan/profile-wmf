const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
// const deps = require('./package.json').dependencies;
console.log(process.env.NODE_ENV);
module.exports = {
    devServer: {
        port: 8084,
    },
    publicPath: process.env.NODE_ENV === 'development' ? "http://localhost:8084/" : "https://profile-wmf.vercel.app/",
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "profile",
                // filename: "remoteProfileEntry.js",
                remotes: {
                    // shell: "shell@http://localhost:8083/remoteEntry.js",
                },
                exposes: {
                    // "./Profile": "./src/views/Profile.vue",
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