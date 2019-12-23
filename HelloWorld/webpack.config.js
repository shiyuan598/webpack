const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        hot: true,
        compress: true,
        host: '172.23.119.121',
        port: '8080',
        publicPath: '/dist'
    }
}