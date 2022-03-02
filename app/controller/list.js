'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async index() {
    const { ctx, app } = this;
    const label = ctx.query.label;
    // console.log('app model==>', app.model.t_build_judgement_page_element_hint);
    let res = await app.model.t_build_judgement_page_element_hint.findByPk(label);

    ctx.body = {
      msg: 'ok',
      // data: res
    };
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
