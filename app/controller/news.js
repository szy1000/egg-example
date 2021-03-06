'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   ctx.body = 'hi, NewsController!!!';
  // }

  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    dataList.list = newsList;
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;
