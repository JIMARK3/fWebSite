const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'development', // 指定为开发模式

    // 入口文件
    entry: {
        main: './src/main.js'
    },
    // 出口文件
    output: {
        // 输出到dist文件夹(打包自动生成)
        path: path.resolve(__dirname, 'dist'), // __dirname：表示当前文件的绝对路径(根目录)
        // 输出文件名在dist文件夹里的js文件夹的chunk.js下
        filename: 'js/chunk-[contenthash].js', // 使用由生成的内容产生的 hash
        // 图片、字体等通过type:asset处理的资源命名方式
        clean: true // 自动清除上次打包的文件
    },
    plugins: [

        new HTMLWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        })

    ]
}
