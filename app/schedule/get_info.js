
const Subscription = require('egg').Subscription;

class GetInfo extends Subscription {

  static get schedule() {
    return {
      interval: 3000,
      type: 'worker',
    };
  }

  async subscribe() {
    const info = this.ctx.info;
    console.log(Date.now(), info);
  }

}


module.exports = GetInfo;
