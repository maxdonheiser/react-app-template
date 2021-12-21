const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: ['regenerator-runtime/runtime.js','./src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
            "os": false,
            "path": false,
            "stream": false,
            "crypto": false,
            "util": false,
            "net": false,
            "fs": false,
            "https": false,
            "assert": false,
            "tls": false,
            "child_process": false,
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.topojson$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'json-loader' }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    { loader: 'url-loader?limit=10000&name=img/[name].[ext]' }
                ]   
            },
            {
                test: /\.csv$/,
                loader: 'csv-loader',
                options: {
                    dynamicTyping: true,
                    header: true,
                    skipEmptyLines: true
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
};