const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    target: 'web',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dev'),
        clean: true,
        filename: "main.js",
        assetModuleFilename: 'assets/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/i,
                use: 'html-loader'
            },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./assets/img/[name][ext]"
                }
            },
            {
                test: /\.(ttf|woff2?)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./assets/fonts/[name][ext]"
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
    devServer: {
        compress: false,
        open: true,
        port: 3000,
        hot: true
    }
}
