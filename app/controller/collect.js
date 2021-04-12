'use strict';

const Controller = require('egg').Controller;

class Collect extends Controller {
  async index() {
    const { ctx, app } = this;
    console.log(ctx.params());
    console.log(ctx.request);
    ctx.body = {
      success: true,
    };
  }
}

module.exports = Collect;
