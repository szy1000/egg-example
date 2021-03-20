'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async query(id = 1) {
    console.log(id);
    if (id === '1') {
      return 'shenzhiyong';
    }
    return 111;
  }
}

module.exports = UserService;
