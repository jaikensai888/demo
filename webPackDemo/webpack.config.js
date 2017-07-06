const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'source-map', //配置生成Source Maps，选择合适的选项
    // devtool:'eval-source-map',
    entry: ['babel-polyfill', __dirname + "/app.js"],
    output: {
        path: __dirname + "/dist/", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    externals: {
    },
    module: { //在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: [
                        "add-module-exports"
                    ],
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')

                // loader: 'style!css' //添加对样式表的处理
                // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'//cssModule
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }, {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: 'url?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.less$/i,
                loader: 'style!css!less'
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        }),
        pxtorem({ rootValue: 100, propWhiteList: [] })
    ],
    devServer: {
        port: "9028",
        host: "192.168.0.107",
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
    ,
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ExtractTextPlugin('style.css', { allChunks: true, disable: false })
    ]
}