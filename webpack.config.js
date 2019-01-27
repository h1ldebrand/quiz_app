const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    devServer: {
        contentBase: path.join(__dirname),
        historyApiFallback: true,
        compress: false,
        port: 9000
    }
};
