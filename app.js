
'use strict';
/*eslint-disable*/
module.exports = app => {

  const store = {}

  app.sessionStore = {
    async get(key) {
      console.log('__store__',store)
      return store[key]
    },

    async set(key,value,maxAge) {
      store[key] = value
    },

    async destroy(key) {
      store[key] = null
    }
  }

  app.config.coreMiddleware.push('auth')


  app.once('server', (server) => {
    // websocket

  });
  app.on('error', (err, ctx) => {
    // report error
  });
  app.on('request', ctx => {
    // log receive request
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
  });
};
