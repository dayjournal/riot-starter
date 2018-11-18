const webpack = require('webpack');

module.exports = {
    entry: './_resouce/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    module : {
        rules : [
            {
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: 'riot-tag-loader',
                query: {
                    hot: true,
                    debug: true
                }
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader:"url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    devServer: {
        contentBase: __dirname + '/dist',
        publicPath: '/',
        watchContentBase: true,
        open: true
    }
};