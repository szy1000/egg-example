module.exports = options => {
  return async (ctx, next) => {
    const url = ctx.request.url;
    console.log('url', url);
    const user = ctx.session.user;
    console.log(user);
  };
};
