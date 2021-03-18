'use strict';
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {
  it('should block robot', () => {
    console.log('mock test==>', mock);
    console.log('assert test==>', assert);
    return app.httpRequest()
      .get('/')
      .set('user-agent', 'Baiduspider')
      .expect(403);
  });
});
