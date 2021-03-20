'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async fetch() {
    this.ctx.body = this.app.cache.get(this.ctx.query.id);
  }

  async login() {
    const { ctx } = this;
    // 传入的参数
    const body = ctx.request.body;
    console.log('body', body);
    ctx.cookies.set('user', JSON.stringify(body));
    ctx.body = {
      status: 'ok',
      data: {
        ...body,
      },
    };
  }

  async logout() {
    const { ctx } = this;
    // 传入的参数
    const body = ctx.request.body;
    console.log('body', body);
    ctx.cookies.set('user', null);
    ctx.body = {
      status: 'ok',
    };
  }

  async query() {
    const { ctx } = this;
    const res = await ctx.cookies.get('user');
    // const res = await ctx.service.user.query(ctx.query.id);
    console.log(res);
    await ctx.render('user/user.tpl', { res: res ? JSON.parse(res).name : null });
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
