'use strict';

module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));

    app.toString(); //  fixed eslint

    if (match) {
      ctx.status = 403;
      ctx.message = 'Go way, robot';
    } else {
      await next();
    }
  };
};
