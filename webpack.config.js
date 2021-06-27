const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {     
        extensions: ['.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        react: 'commonjs react'
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false
                }
            }
        })],
    }     
}