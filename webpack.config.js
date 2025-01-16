const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './script.js',
    output: {
        filename: 'main.js',
        publicPath: 'dist'
    },
    module: {
        rules: [{
            test: /\\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new Dotenv()
    ]
};