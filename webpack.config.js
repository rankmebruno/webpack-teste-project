const path = require('path')

const archiveName = 'index.js'

module.exports = {
    entry: [
        '@babel/polyfill',
        path.resolve(__dirname, 'src', archiveName)
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: archiveName
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}