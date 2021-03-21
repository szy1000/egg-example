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
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

