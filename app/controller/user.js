'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async fetch() {
    this.ctx.body = this.app.cache.get(this.ctx.query.id);
  }

  async add() {
    const { ctx } = this;
    // 参数规则校验
    const rule = {
      name: { type: 'string' },
      age: { type: 'number' },
    };

    ctx.validate(rule);
    ctx.body = {
      status: true,
      data: {
        ...ctx.request.body,
      },
    };
  }

  async edit() {
    const { ctx } = this;
    // 参数规则校验
    const rule = {
      name: { type: 'string' },
      age: { type: 'number' },
    };

    ctx.validate(rule);
    ctx.body = {
      status: true,
      data: {
        ...ctx.request.body,
      },
    };
  }

  async del() {
    const { ctx } = this;
    // 参数规则校验
    const rule = {
      name: { type: 'string' },
      age: { type: 'number' },
    };

    ctx.validate(rule);
    ctx.body = {
      status: true,
      data: {
        ...ctx.request.body,
      },
    };
  }
}

module.exports = UserController;
