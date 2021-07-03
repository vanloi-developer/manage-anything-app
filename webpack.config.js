const webpackNodeExternals = require("webpack-node-externals");
const path = require('path');

module.exports = {
        mode: 'development',
        entry: {
            server: "./index.js",
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.js",
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        externals: [webpackNodeExternals()],
        module: {
            rules: [{
                //Translator ES6 to ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }]
        }
    }
    // npm run webpack
    // npm run start