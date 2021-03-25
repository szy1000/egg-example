'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const PATH = '/api/v1';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/', controller.home.index);

  router.get('/news', controller.news.list);


  router.get('/list', controller.list.index);
  // 路由传参 && 动态路由传参
  router.get('/detail', controller.list.detail);
  router.get('/detail/:id', controller.list.detail2);

  router.post(`${PATH}/user/login`, controller.user.login);
  router.post(`${PATH}/user/logout`, controller.user.logout);

  router.get('/user/query', controller.user.query);
  router.post(`${PATH}/user/add`, controller.user.add);
  router.put('/user/edit', controller.user.edit);
  router.delete('/user/del', controller.user.del);

  router.get('/curl', controller.curl.index);
};
