/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
  };


  if (process.env.http_proxy) {
    config.httpclient = {
      request: {
        enableProxy: true,
        rejectUnauthorized: false,
        proxy: process.env.http_proxy,
      },
    };
  }

  config.proxy = true;

  config.httpclient = {
    request: {
      timeout: 3000,
    },
    httpAgent: {
      keepAlive: true,
      timeout: 63000,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615803265022_1948';

  // add your middleware config here
  config.middleware = [
    'robot',
    'httpLog',
  ];

  config.robot = {
    ua: [ /curl/i, /Baiduspider/i ],
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.news = {
    pageSize: 5,
    // serverUrl: 'https://hacker-news.firebaseio.com/v0',
    serverUrl: 'https://shenzhiyong.com.cn/',
  };


  config.mysql = {
    app: true,
    agent: false,
    client: {
      // host: '127.0.0.1',
      // port: 3306,
      // user: 'root',
      // password: 'sx123456',
      // database: 'egg',

      host: '121.89.240.241',
      port: 43306,
      user: 'root',
      password: 'cptbtptp123456',
      database: 'hzTest',

    },
  };

  config.sequelize = {
    // dialect: 'mysql',
    // host: '127.0.0.1',
    // port: 3306,
    // user: 'root',
    // password: 'sx123456',
    // database: 'egg_house',

    dialect: 'mysql',
    host: '121.89.240.241',
    port: 43306,
    user: 'root',
    password: 'cptbtptp123456',
    database: 'hzTest',

    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };

  config.jwt = {
    secret: 'shenzhiyong',
  };

  config.cors = {
    origin: 'http://localhost:63342', // 匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.auth = [ '/api/user/login', '/api/user/register' ];
  // add your user config here
  const userConfig = {
    salt: 'shenzhiyong',
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

