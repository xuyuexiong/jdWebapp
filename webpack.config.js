const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './app/js/main.js'
    },
    devServer: {
        contentBase: path.join(_dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                cssModules: {
                    localIdentName: '[path][name]---[local]---[hash:base64:5]',
                    camelCase: true,
                },

                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader!px2rem-loader?remUnit=75&remPrecision=8',
                        fallback: 'vue-style-loader'
                    }),
                    scss: ExtractTextPlugin.extract({
                        use: 'css-loader!px2rem-loader?remUnit=75&remPrecision=8!sass-loader',
                        fallback: 'vue-style-loader'
                    }),
                }
            }
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!scss-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new ExtractTextPlugin("style.css")
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(_dirname, 'dist')
    }
}