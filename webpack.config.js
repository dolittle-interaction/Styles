const path = require('path');
const configParts = require("./webpack.parts");


module.exports = [{
    entry: ['./app/scripts/index.js', './app/styles/style.scss'],
    output: {
        filename: 'bundle.[hash:9].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            configParts.loaders.htmlLoader,
            configParts.loaders.sassLoader,
            configParts.loaders.svgLoader
        ]
    },
    plugins: [
        configParts.plugins.cleanDistFolderAndIndexfile,
        configParts.plugins.buildHtmlIndex,
        configParts.plugins.sassBuilder
    ],
    devServer: {
        contentBase: './dist',
        port: 1337,
        open: true
    }
}];