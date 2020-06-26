const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            // Все файлы с разрешениями '.ts' или '.tsx' будет обрабатывать 'ts-loader'
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 200000
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },

    devServer: {
        contentBase: path.join(__dirname),
        historyApiFallback: true,
        compress: false,
        port: 9001
    }
};
