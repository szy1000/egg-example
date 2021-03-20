'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);


  router.get('/list', controller.list.index);
  // 路由传参 && 动态路由传参
  router.get('/detail', controller.list.detail);
  router.get('/detail/:id', controller.list.detail2);

  router.post('/user/add', controller.user.add);
  router.put('/user/edit', controller.user.edit);
  router.delete('/user/del', controller.user.del);
};
