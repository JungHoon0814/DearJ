// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app: any) => {
  app.use(
    '/users',
    createProxyMiddleware({
      target: 'http://kdt-ai6-team01.elicecoding.com:3001',
      changeOrigin: true,
    }),
  );

  app.use(
    '/experts',
    createProxyMiddleware({
      target: 'http://kdt-ai6-team01.elicecoding.com:3001',
      changeOrigin: true,
    }),
  );

  app.use(
    '/comments',
    createProxyMiddleware({
      target: 'http://kdt-ai6-team01.elicecoding.com:3001',
      changeOrigin: true,
    }),
  );

  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://kdt-ai6-team01.elicecoding.com:3001',
      changeOrigin: true,
    }),
  );

  app.use(
    '/resumes',
    createProxyMiddleware({
      target: 'http://kdt-ai6-team01.elicecoding.com:3002',
      changeOrigin: true,
    }),
  );
};
