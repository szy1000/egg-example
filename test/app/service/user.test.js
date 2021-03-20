'use strict';

const { app, assert } = require('egg-mock/bootstrap');


describe('service user test', () => {
  it.only('test user', async () => {
    const ctx = app.mockContext();
    const user = await ctx.service.user.query('1');
    assert(user);
    assert(user === 'shenzhiyong');
  });
});
