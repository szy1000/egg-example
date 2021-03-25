'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async query(id = 1) {
    console.log('idid', id);
    try {
      const { app } = this;
      // console.log('app', app.mysql);
      // 查询所有
      // return await app.mysql.select('user');
    } catch (error) {
      console.log(error);
      return null;
    }
    // if (id === '1') {
    //   return 'shenzhiyong';
    // }
    // return 111;
  }
}

module.exports = UserService;
