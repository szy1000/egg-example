'use strict';

const Service = require('egg').Service;

class SomeService extends Service {
  async list() {
    const rule = this.config.robot.ua;
    this.ctx.body = rule;
  }
}

module.exports = SomeService;
