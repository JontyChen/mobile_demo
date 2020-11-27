const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(proxy('/api', {
    //     target: 'http://localhost:3333/'
    // }));
    app.use(proxy('/api', {
        target: 'https://h5.jumei.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }));

    // app.use(proxy('/activity', {
    //     target: 'http://h5.jumei.com/',
    //     changeOrigin: true
    // }));

};
