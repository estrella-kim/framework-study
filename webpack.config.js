const path = require('path');
module.exports = {
    entry : {
        index : './src/index'
    },
    output : {
        path : path.resolve(__dirname, "./public"),
        filename : '[name].bundle.js',
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    }
}