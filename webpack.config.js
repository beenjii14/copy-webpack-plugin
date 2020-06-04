const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const Assets = require('./assets');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyPlugin({
            patterns: Assets.map(asset => (
                {
                    from: path.resolve(__dirname, `./node_modules/${asset}`),
                    to: path.resolve(__dirname, 'libs')
                }
            ))
        })
    ]
}
