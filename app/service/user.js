'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  async getUser(username) {
    const { ctx } = this;
    try {
      return await ctx.model.User.findOne({
        where: {
          username,
        },
      });
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async registerUser(params) {
    const { ctx } = this;
    try {
      return await ctx.model.User.create(params);
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  // async query(id) {
  //   try {
  //     const { app } = this;
  //     // console.log('app', app.mysql);
  //     if (id) {
  //       // 查询一个
  //       return [ await app.mysql.get('user', { id }) ];
  //     }
  //     // 查询所有
  //     return await app.mysql.select('user');
  //
  //
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  //   // if (id === '1') {
  //   //   return 'shenzhiyong';
  //   // }
  //   // return 111;
  // }
  //
  // async add(params) {
  //   try {
  //     const { app } = this;
  //     // 查询一个
  //     return await app.mysql.insert('user', params);
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
  //
  // async update(params) {
  //   try {
  //     const { app } = this;
  //     // 查询一个
  //     return await app.mysql.update('user', params);
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
  //
  // async del(id) {
  //   try {
  //     const { app } = this;
  //     // 查询一个
  //     return await app.mysql.del('user', { id });
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
}

module.exports = UserService;
