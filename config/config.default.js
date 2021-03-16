/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  console.log(path.join(appInfo.baseDir, '/app/public'));
  const config = exports = {
    view: {
      // root: [
      //   path.join(appInfo.baseDir, '/app/view'),
      //   path.join(appInfo.baseDir, '/app'),
      // ].join(','),
      // root: path.join('/'),
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615803265022_1948';

  // add your middleware config here
  config.middleware = [];

  config.static = {
    prefix: '/public',
    dir: path.join(appInfo.baseDir, 'app/public'),
    dynamic: true,
    preload: false,
    maxAge: 31536000,
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
