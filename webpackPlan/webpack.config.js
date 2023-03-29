// webpack.config.js
module.exports = {
    mode: 'production',
    entry: './src/scripts/index.js',   // 打包入口
    output: {
        path: __dirname + '/dist',   // 输出路径
        filename: 'scripts/index.js'    //  输出文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/,   // 正则表达式，表示.css后缀的文件
                use: ['style-loader', 'css-loader']   // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            }
        ]
    },
    watch: true
};