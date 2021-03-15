'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(controller.news)
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
};
