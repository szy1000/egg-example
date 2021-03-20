'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'sss';
  }

  async detail() {
    const { ctx } = this;
    ctx.query;
    ctx.body = ctx.query;
  }

  // 动态获取
  async detail2() {
    const { ctx } = this;
    ctx.body = ctx.params;
  }
}

module.exports = ListController;
