'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // application 扩展
    const _packageInfo = app.package();
    // console.log(app.allPackage);

    // ctx扩展 get post都可以
    console.log(ctx.params());

    console.log(ctx.request.token);

    // helper扩展
    ctx.response.token = ctx.helper.base64('dsadsada');
    await ctx.render('home/home.tpl', {
      _packageInfo: JSON.stringify(_packageInfo),
    });
  }
}

module.exports = HomeController;
