'use strict';
const dayjs = require('dayjs');
const fs = require('fs');

module.exports = (options, app) => {
  return async function httpLogMiddleware(ctx, next) {
    const { method, url, body } = ctx.request;
    const sTime = Date.now();
    const startTime = dayjs(Date.now()).format('YYYY-MM-DD: HH:mm:ss');
    await next();

    const log = {
      url,
      method,
      data: body,
      startTime,
      timeLength: Date.now() - sTime + 'ms',
    };

    const data = dayjs(Date.now()).format('YYYY-MM-DD: HH:mm:ss') +
      ' [httpLog] ' + JSON.stringify(log) + '\r\n';
    fs.appendFileSync(app.baseDir + '/httpLog.log', data);
  };
};
