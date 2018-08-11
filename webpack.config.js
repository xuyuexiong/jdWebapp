const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
            loader: 'vue-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!scss-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    resolve:{
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(_dirname, 'dist')
    }
}