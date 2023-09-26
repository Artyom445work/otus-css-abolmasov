const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    target: 'browserslist',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
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
                    filename: "./assets/[contenthash][ext]"
                }
            },
            {
                test: /\.(ttf|woff2?)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./assets/[contenthash][ext]"
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
        port: 9000,
        hot: true
    }
}
