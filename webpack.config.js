// entry point -> output bundle file
// see webpack.js.org

const path = require('path');

// entry: './src/app.js',
    // // entry: './src/playground/redux-101.js',
    // entry: './src/playground/destructuring.js',
    // entry: './src/playground/redux-expensify.js',
    // entry: './src/playground/hoc.js',
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [ 
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

};