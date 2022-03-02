// eslint-disable-next-line strict
module.exports = options => {
  return async (ctx, next) => {
    const url = ctx.request.url;
    await next();
    console.log('url', url);
    // const user = ctx.session.user;
    // if (user) {
    //   await next();
    // } else {
    //   console.log('==>', ctx.session);
    //   ctx.body = {
    //     status: 101,
    //     errMsg: '用户未登录',
    //   };
    // }
  };
};
