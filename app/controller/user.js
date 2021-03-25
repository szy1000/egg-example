'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {

  encode(str = '') {
    return new Buffer(str).toString('base64');
  }

  decode(str = '') {
    return new Buffer(str, 'base64').toString();
  }

  async fetch() {
    this.ctx.body = this.app.cache.get(this.ctx.query.id);
  }

  async login() {
    const { ctx } = this;
    // 传入的参数
    const body = ctx.request.body;
    ctx.cookies.set('user', JSON.stringify(body), {
      maxAge: 60 * 60 * 12,
      httpOnly: false,
    });

    ctx.cookies.set('test_Zh', '测试中文', {
      maxAge: 60 * 60 * 12,
      encrypt: true,
      httpOnly: false,
    });

    // 保存 session
    ctx.session.user = body;


    ctx.body = {
      status: 'ok',
      data: {
        ...body,
      },
    };
  }

  async logout() {
    const { ctx } = this;
    // 清除session
    ctx.session.user = null;

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

    // 获取session
    const session = ctx.session.user;
    console.log('session', session);
    // 操作cookies
    const res = await ctx.cookies.get('user');
    const test_Zh = await ctx.cookies.get('test_Zh', {
      encrypt: true,
    });
    // const res = await ctx.service.user.query(ctx.query.id);
    console.log(test_Zh);


    // 获取数据库数据
    // const data = await ctx.service.user.query(ctx.params().id);

    console.log('ctx.model[===>', ctx.model.User);
    let data = null;
    console.log(ctx.params());
    const { id, limit = 20, offset } = ctx.params();
    if (id) {
      data = [ await ctx.model.User.findByPk(id) ];
    } else {
      data = await ctx.model.User.findAll({
        limit: toInt(limit),
        offset: toInt(offset),
      });
    }

    await ctx.render('user/user.tpl', {
      res: res ? JSON.parse(res).name : null,
      test_Zh,
      data,
    });
  }

  async add() {
    const { ctx } = this;
    // 参数规则校验
    const rule = {
      name: { type: 'string' },
      pwd: { type: 'string' },
    };

    ctx.validate(rule);

    // 插入数据库
    // const data = await ctx.service.user.add(ctx.params());

    const data = await ctx.model.User.create(ctx.params());

    ctx.body = {
      status: true,
      data,
    };
  }

  async edit() {
    const { ctx } = this;
    // 参数规则校验
    const rule = {
      id: { type: 'string' },
      name: { type: 'string' },
      pwd: { type: 'string' },
    };

    ctx.validate(rule);
    // 编辑数据库
    // const data = await ctx.service.user.update(ctx.params());
    console.log({ id: ctx.params().id });

    const user = await ctx.model.User.findByPk(ctx.params().id);
    console.log(user);
    if (!user) {
      ctx.body = {
        status: 404,
        errMsg: 'id不存在',
      };
      return;
    }

    const data = user.update(ctx.params());
    ctx.body = {
      status: true,
      data,
    };
  }

  async del() {
    const { ctx } = this;
    // 参数规则校验
    // const data = await ctx.service.user.delete(ctx.params().id);
    console.log('ctx.params().id==>', ctx.params().id);
    const user = await ctx.model.User.findByPk(ctx.params().id);

    console.log('ctx.params().user==>', user);

    if (!user) {
      ctx.body = {
        status: 404,
        errMsg: 'id不存在',
      };
      return;
    }

    const data = user.destroy(ctx.params().id);


    ctx.body = {
      status: true,
      data,
    };
  }
}

module.exports = UserController;
