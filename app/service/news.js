'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    const { serverUrl, pageSize } = this.config.news;
    console.log('url==>',`${serverUrl}/topstories.json`)
    const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`,
      },
      dataType: 'json',
      timeout: 36000,
    });

    console.log('data', { data: idList });

    idList.length = 1
    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      })
    );

    return newsList.map(res => res.data);
  }
}

module.exports = NewsService;
