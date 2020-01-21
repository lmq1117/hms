module.exports = {
    devServer: {
        port: 9999,
        host: 'localhost',
        https: false,
        open: true,

        //代理
        proxy: {
            //包含/api的请求 会实际请求target配置的地址
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true,
            },
        },
    },
    lintOnSave: false,
    productionSourceMap: false,

}