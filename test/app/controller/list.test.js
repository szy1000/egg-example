'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/list.test.js', () => {
  it('user list', async () => {
    await app.httpRequest()
      .get('/detail?id=1')
      .expect(200)
      .expect('{"id":"1"}');
  });

  it('should GET /detail/2', () => {
    return app.httpRequest()
      .get('/detail/2')
      .expect('{"id":"2"}')
      .expect(200);
  });
});
