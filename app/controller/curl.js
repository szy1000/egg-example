'use strict';

const Controller = require('egg').Controller;

class CurlController extends Controller {
  async index() {
    const { ctx, app } = this;
    const res = await ctx.curl('http://localhost:7001');
    console.log(res)
    ctx.body = res
  }
}

module.exports = CurlController;
