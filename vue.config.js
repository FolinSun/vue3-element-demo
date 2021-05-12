const bodyParser = require('body-parser');
const mockServer = require('./mock/mock-server');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const { VUE_APP_PORT, NODE_ENV, VUE_APP_MOCK, VUE_APP_BASE_URL } = process.env;

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  // 支持template选项
  runtimeCompiler: true,
  // 设置为true时，此选项将绕过主机检查。不建议这样做，因为不检查主机的应用容易受到DNS重新绑定攻击的攻击。
  // disableHostCheck: false,
  devServer: {
    port: VUE_APP_PORT || 9527,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // 开发代理
    proxy: {
      [VUE_APP_BASE_URL]: {
        // 目标地址
        target: `http://localhost:${VUE_APP_PORT}`,
        // target是域名的话，需要这个参数
        changeOrigin: true,
        // 设置支持https协议的代理
        secure: false,
        // 重写路径
        // pathRewrite: { [`^${VUE_APP_BASE_URL}`]: '' },
      },
    },
    before: function (app) {
      // 本地开发环境使用 mock 模拟数据
      if (NODE_ENV === 'development' && VUE_APP_MOCK) {
        // parse app.body
        // https://expressjs.com/en/4x/api.html#req.body
        // create application/json parser
        app.use(bodyParser.json());
        // create application/x-www-form-urlencoded parser
        app.use(bodyParser.urlencoded({ extended: false }));
        mockServer(app);
      }
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ]);

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch');

    // set svg-sprite-loader
    // 内置的 svg Rule 添加 exclude
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('svgIcon')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();

    //svgo Rule
    config.module
      .rule('svgo')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        // externalConfig 配置特殊不是相对路径，起始路径是根目录
        externalConfig: './src/icons/svgo.yml',
      });
  },
};
