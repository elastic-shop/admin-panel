const path = require('path');
const webpack = require('webpack');
const { NODE_ENV } = process.env;

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        "transpileOnly": true
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                exclude: /node_modules/,
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(NODE_ENV)
        },
        'NODE_ENV': JSON.stringify(NODE_ENV)
      })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/',
        compress: true,
        host: '0.0.0.0',
        hot: true,
        port: 8888
    }
};