const path = require('path')

module.exports = {
    entry: {
        app: './app/js/main.js'
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
    plugins: [],
    output: {
        filename: '[name].min.js',
        path: path.resolve(_dirname, 'dist')
    }
}