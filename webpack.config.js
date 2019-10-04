const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    output: {
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })]
}