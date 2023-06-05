const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/json', {
      target: 'https://ys-react-hansot.s3.ap-northeast-2.amazonaws.com',
      changeOrigin: true,
    })
  );
};
